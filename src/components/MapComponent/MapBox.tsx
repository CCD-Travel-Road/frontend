import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedLocationState } from "../../recoil/atoms";

function MapBox() {
    const [, setLocation] = useRecoilState(selectedLocationState);
    const [, setPlaceInfo] = useState<{ name: string; address: string; button: boolean } | null>(null);

    useEffect(() => {
        const initializeMap = () => {
            if (window.kakao && window.kakao.maps) {
                const container = document.getElementById('map');
                if (container) {
                    const mapOptions = {
                        center: new window.kakao.maps.LatLng(37.517223, 127.041292),
                        level: 2,
                    };

                    const map = new window.kakao.maps.Map(container, mapOptions);

                    const marker = new window.kakao.maps.Marker({
                        position: map.getCenter(),
                    });
                    marker.setMap(map);

                    const customOverlay = new window.kakao.maps.CustomOverlay({
                        position: map.getCenter(),
                        content: '',
                        yAnchor: 1.3
                    });

                    window.kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
                        const latlng = mouseEvent.latLng;

                        marker.setPosition(latlng);

                        const geocoder = new window.kakao.maps.services.Geocoder();
                        geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, addrStatus) => {
                            if (addrStatus === window.kakao.maps.services.Status.OK) {
                                if (result.length > 0) {
                                    const roadAddress = result[0].road_address?.address_name || '';
                                    const addressName = result[0].address?.address_name || '';

                                    // 장소 검색 API 요청
                                    const searchPlaces = () => {
                                        const ps = new window.kakao.maps.services.Places();
                                        const callback = (placesData, placeStatus) => {
                                            if (placeStatus === window.kakao.maps.services.Status.OK) {
                                                const firstPlace = placesData[0];
                                                const placeNameFromSearch = firstPlace ? firstPlace.place_name : addressName;
                                                const updatedPlaceInfo = {
                                                    name: placeNameFromSearch,
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
                                                        height: ${roadAddress ? '110px' : '80px'};
                                                        padding: 10px;
                                                        background-color: #fff;
                                                        border-radius: 8px;
                                                        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
                                                        display: flex;
                                                        flex-direction: column;
                                                        justify-content: space-between;
                                                    ">
                                                        <div style="flex: 1;">
                                                            <h2 style="margin: 0 0 5px; font-family: 'Pretendard'; font-size: 16px; color: #333;">${placeNameFromSearch}</h2>
                                                            ${roadAddress ? `<p style="margin: 0; font-size: 14px; color: #666;">${roadAddress}</p>` : ''}
                                                        </div>
                                                        <div style="height: 1px; background-color: #e7e7e7; margin: 10px 0;"></div>
                                                        <div style="display: flex; flex-direction: row; gap: 10px;">
                                                            ${updatedPlaceInfo.button ? '<button style="padding: 5px 10px; background-color: #2958DB; color: #fff; border: none; border-radius: 8px; cursor: pointer; flex: 1;">추가하기</button>' : ''}
                                                            ${updatedPlaceInfo.button ? '<button style="padding: 5px 10px; background-color: #fff; color: #2958DB; border: 1px solid #2958DB; border-radius: 8px; cursor: pointer; flex: 1;">자세히 보기</button>' : ''}
                                                        </div>
                                                    </div>
                                                    `;
                                                customOverlay.setContent(content);
                                                customOverlay.setPosition(latlng);
                                                customOverlay.setMap(map);
                                                map.setCenter(latlng);
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

    return (
        <div>
            <div id="map" style={{ width: "100vw", height: "100vh" }} />
        </div>
    );
}

export default MapBox;
