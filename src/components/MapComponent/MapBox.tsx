import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedLocationState, searchedLocationState } from "../../recoil/atoms";

function MapBox() {
    const [, setLocation] = useRecoilState(selectedLocationState);
    const [, setPlaceInfo] = useState<{ name: string; address: string; button: boolean } | null>(null);
    const searchedLocation = useRecoilValue(searchedLocationState);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [customOverlay, setCustomOverlay] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const initializeMap = () => {
            if (window.kakao && window.kakao.maps) {
                const container = document.getElementById('map');
                if (container) {
                    const mapOptions = {
                        center: new window.kakao.maps.LatLng(37.5014, 127.0391),
                        level: 2,
                    };

                    const newMap = new window.kakao.maps.Map(container, mapOptions);
                    setMap(newMap);

                    const newMarker = new window.kakao.maps.Marker({
                        position: new window.kakao.maps.LatLng(0, 0),
                        map: null,
                    });
                    setMarker(newMarker);

                    const newCustomOverlay = new window.kakao.maps.CustomOverlay({
                        position: new window.kakao.maps.LatLng(0, 0),
                        content: '',
                        yAnchor: 1.3,
                        map: null,
                    });
                    setCustomOverlay(newCustomOverlay);

                    window.kakao.maps.event.addListener(newMap, 'click', (mouseEvent) => {
                        const latlng = mouseEvent.latLng;
                        newMarker.setPosition(latlng);
                        newMarker.setMap(newMap);

                        const geocoder = new window.kakao.maps.services.Geocoder();
                        geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, addrStatus) => {
                            if (addrStatus === window.kakao.maps.services.Status.OK) {
                                if (result.length > 0) {
                                    const roadAddress = result[0].road_address?.address_name || '';
                                    const addressName = result[0].address?.address_name || '';

                                    const searchPlaces = () => {
                                        const ps = new window.kakao.maps.services.Places();
                                        const callback = (placesData, placeStatus) => {
                                            if (placeStatus === window.kakao.maps.services.Status.OK) {
                                                const firstPlace = placesData[0];
                                                const placeNameFromSearch = firstPlace ? firstPlace.place_name : '';

                                                const updatedPlaceInfo = {
                                                    name: placeNameFromSearch || addressName,
                                                    address: roadAddress,
                                                    button: true
                                                };
                                                setPlaceInfo(updatedPlaceInfo);

                                                const content = `
                                                    <div style="
                                                        font-family: 'Pretendard';
                                                        font-size: 14px;
                                                        color: #333;
                                                        width: 250px;
                                                        height: ${roadAddress ? '130px' : '100px'};
                                                        padding: 10px;
                                                        background-color: #fff;
                                                        border-radius: 8px;
                                                        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
                                                        display: flex;
                                                        flex-direction: column;
                                                        justify-content: space-between;
                                                    ">
                                                        <div style="flex: 1;">
                                                            <h2 style="margin: 5px; font-family: 'Pretendard'; font-size: 16px; color: #333;">${placeNameFromSearch || addressName}</h2>
                                                            ${roadAddress ? `<p style="margin: 2px 5px; font-size: 14px; color: #666;">${roadAddress}</p>` : ''}
                                                        </div>
                                                        ${roadAddress ? '<div style="height: 1px; background-color: #e7e7e7; margin: 10px 0;"></div>' : ''}
                                                        <div style="display: flex; flex-direction: row; gap: 10px;">
                                                            <button style="padding: 10px 10px; background-color: #2958DB; color: #fff; border: none; border-radius: 8px; cursor: pointer; flex: 1;">추가하기</button>
                                                            <button style="padding: 10px 10px; background-color: #fff; color: #2958DB; border: 1px solid #2958DB; border-radius: 8px; cursor: pointer; flex: 1;">자세히 보기</button>
                                                        </div>
                                                    </div>
                                                `;
                                                newCustomOverlay.setContent(content);
                                                newCustomOverlay.setPosition(latlng);
                                                newCustomOverlay.setMap(newMap);
                                                newMap.setCenter(latlng);
                                                setLocation({ lat: latlng.getLat(), lng: latlng.getLng() });
                                            } else {
                                                console.error("Place search failed.");
                                            }
                                        };

                                        ps.keywordSearch(addressName, callback, {
                                            location: latlng,
                                            radius: 100, // 검색 반경 (단위: 미터)
                                        });
                                    };

                                    searchPlaces();
                                }
                            } else {
                                console.error("Address search failed.");
                            }
                        });
                    });
                } else {
                    console.error("Map container element not found.");
                }
            } else {
                console.error("Kakao Maps API is not available.");
            }
        };

        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(initializeMap);
        } else {
            const mapScript = document.createElement('script');
            mapScript.async = true;
            mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_APP_KEY}&autoload=false&libraries=services,clusterer`;
            document.head.appendChild(mapScript);

            mapScript.onload = () => {
                if (window.kakao && window.kakao.maps) {
                    window.kakao.maps.load(initializeMap);
                } else {
                    console.error("Failed to load Kakao Maps API.");
                }
            };
        }

        return () => {
            const script = document.querySelector(`script[src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_APP_KEY}&libraries=services,clusterer"]`);
            if (script) {
                document.head.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        if (searchedLocation && map && marker && customOverlay) {
            const { lat, lng, placeName } = searchedLocation;
            const latlng = new window.kakao.maps.LatLng(lat, lng);

            const defaultPlaceName = initialLoad ? '장소명 없음' : '강남구청역 7호선';

            if (initialLoad) {
                setInitialLoad(false);
            }

            if (marker) {
                marker.setPosition(latlng);
                marker.setMap(map);
            }

            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, addrStatus) => {
                if (addrStatus === window.kakao.maps.services.Status.OK) {
                    const addressResult = result.find((r) => r.road_address || r.address);
                    const roadAddressName = addressResult?.road_address?.address_name || '';
                    const landAddressName = addressResult?.address?.address_name || '';

                    // 선택된 장소명과 주소 처리
                    const placeNameFromResult = placeName || defaultPlaceName;
                    const addressToDisplay = roadAddressName || landAddressName || '주소 없음';

                    const content = `
                        <div style="
                            font-family: 'Pretendard';
                            font-size: 14px;
                            color: #333;
                            width: 250px;
                            height: ${roadAddressName || landAddressName ? '130px' : '100px'};
                            padding: 10px;
                            background-color: #fff;
                            border-radius: 8px;
                            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        ">
                            <div style="flex: 1;">
                                <h2 style="margin: 5px; font-family: 'Pretendard'; font-size: 16px; color: #333;">${placeNameFromResult}</h2>
                                ${addressToDisplay ? `<p style="margin: 2px 5px; font-size: 14px; color: #666;">${addressToDisplay}</p>` : ''}
                            </div>
                            ${addressToDisplay ? '<div style="height: 1px; background-color: #e7e7e7; margin: 10px 0;"></div>' : ''}
                            <div style="display: flex; flex-direction: row; gap: 10px;">
                                <button style="padding: 10px 10px; background-color: #2958DB; color: #fff; border: none; border-radius: 8px; cursor: pointer; flex: 1;">추가하기</button>
                                <button style="padding: 10px 10px; background-color: #fff; color: #2958DB; border: 1px solid #2958DB; border-radius: 8px; cursor: pointer; flex: 1;">자세히 보기</button>
                            </div>
                        </div>
                    `;

                    if (customOverlay) {
                        customOverlay.setContent(content);
                        customOverlay.setPosition(latlng);
                        customOverlay.setMap(map);
                        map.setCenter(latlng);
                        setLocation({ lat, lng });
                    }
                } else {
                    console.error("Address search for searched location failed.");
                }
            });
        }
    }, [searchedLocation, map, marker, customOverlay]);

    return (
        <div id="map" style={{ width: '100%', height: '100vh' }} />
    );
}

export default MapBox;
