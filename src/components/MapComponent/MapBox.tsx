import { useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import { selectedPlaceState } from "../../recoil/atoms";
import InfoBox from "./InfoBox";

interface MapContainerProps {
    disableClicks: boolean;
}

const MapContainer = styled.div<MapContainerProps>`
    width: 100%;
    height: 100vh;
    position: relative;
    pointer-events: ${(props) => (props.disableClicks ? 'none' : 'auto')};
`;

function MapBox() {
    const [, setPlaceInfo] = useState<{ placeName: string; lat: number; lng: number; placeAddress: string } | null>(null);
    const [selectedPlace, setSelectedPlace] = useRecoilState(selectedPlaceState);
    const [disableClicks, setDisableClicks] = useState(false);
    const navigate = useNavigate();
    const [searchedLocation,] = useState<{ lat: number; lng: number; placeName: string } | null>(null);
    const [map,] = useState(null);
    const [marker,] = useState(null);
    const [customOverlay,] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true);

    const handleInfoBoxOpen = () => setDisableClicks(true);
    const handleInfoBoxClose = () => setDisableClicks(false);

    const handleDetailsClick = useCallback(() => {
        console.log("Navigating to /details with selectedPlace:", selectedPlace);
        if (selectedPlace && selectedPlace.placeName) {
            navigate("/details");
        } else {
            console.error("No place info available when navigating.");
        }
    }, [selectedPlace, navigate]);

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
                    const newMarker = new window.kakao.maps.Marker({ position: new window.kakao.maps.LatLng(0, 0), map: null });
                    const newCustomOverlay = new window.kakao.maps.CustomOverlay({ position: new window.kakao.maps.LatLng(0, 0), content: '', yAnchor: 1, map: null });

                    window.kakao.maps.event.addListener(newMap, 'click', (mouseEvent) => {
                        if (disableClicks) return;

                        const latlng = mouseEvent.latLng;
                        newMarker.setPosition(latlng);
                        newMarker.setMap(newMap);

                        const geocoder = new window.kakao.maps.services.Geocoder();
                        geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, addrStatus) => {
                            if (addrStatus === window.kakao.maps.services.Status.OK && result.length > 0) {
                                const roadAddress = result[0].road_address?.address_name || '';
                                const addressName = result[0].address?.address_name || '';

                                const searchPlaces = () => {
                                    const ps = new window.kakao.maps.services.Places();
                                    const callback = (placesData, placeStatus) => {
                                        if (placeStatus === window.kakao.maps.services.Status.OK) {
                                            const firstPlace = placesData[0];
                                            const placeNameFromSearch = firstPlace ? firstPlace.place_name : '';

                                            const updatedPlaceInfo = {
                                                placeName: placeNameFromSearch || addressName,
                                                lat: latlng.getLat(),
                                                lng: latlng.getLng(),
                                                placeAddress: roadAddress || addressName || '주소 없음',
                                            };

                                            setPlaceInfo(updatedPlaceInfo);
                                            setSelectedPlace(updatedPlaceInfo);

                                            const infoBoxContainer = document.createElement('div');
                                            const root = createRoot(infoBoxContainer);
                                            root.render(
                                                <InfoBox
                                                    placeName={placeNameFromSearch || addressName}
                                                    roadAddress={roadAddress}
                                                    onAddClick={() => {
                                                        handleInfoBoxOpen();
                                                        alert('장소가 추가되었습니다.');
                                                        handleInfoBoxClose();
                                                    }}
                                                    onDetailsClick={handleDetailsClick}
                                                    onClose={handleInfoBoxClose}
                                                />
                                            );

                                            newCustomOverlay.setContent(infoBoxContainer);
                                            newCustomOverlay.setPosition(latlng);
                                            newCustomOverlay.setMap(newMap);
                                            newMap.setCenter(latlng);
                                        } else {
                                            console.error("Place search failed.");
                                        }
                                    };

                                    ps.keywordSearch(addressName, callback, {
                                        location: latlng,
                                        radius: 100,
                                    });
                                };

                                searchPlaces();
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
    }, [setSelectedPlace]);
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

                    const placeNameFromResult = placeName || defaultPlaceName;
                    const addressToDisplay = roadAddressName || landAddressName || '주소 없음';
                    const infoBoxContainer = document.createElement('div');
                    const root = createRoot(infoBoxContainer);
                    root.render(
                        <InfoBox
                            placeName={placeNameFromResult}
                            roadAddress={addressToDisplay}
                            onAddClick={() => {
                                handleInfoBoxOpen();
                                alert('장소가 추가되었습니다.');
                            }}
                            onDetailsClick={() => alert('자세히 보기 클릭됨')}
                            onClose={handleInfoBoxClose}
                        />
                    );

                    if (customOverlay) {
                        customOverlay.setContent(infoBoxContainer);
                        customOverlay.setPosition(latlng);
                        customOverlay.setMap(map);
                        map.setCenter(latlng);
                    }
                } else {
                    console.error("Address search for searched location failed.");
                }
            });
        }
    }, [searchedLocation, map, marker, customOverlay, initialLoad]);

    return (
        <MapContainer disableClicks={disableClicks}>
            <div id="map" style={{ width: '100%', height: '100vh' }} />
        </MapContainer>
    );
}

export default MapBox;
