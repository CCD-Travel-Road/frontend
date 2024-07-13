import React, { useEffect } from "react";


declare global {
    interface Window {
        kakao: Kakao;
    }
}

interface Kakao {
    maps: {
        load(initializeMap: () => void): unknown;
        Map: new (container: HTMLElement | null, options: MapOptions) => KakaoMap;
        LatLng: new (lat: number, lng: number) => LatLng;
    };
}

interface MapOptions {
    center: LatLng;
    level: number;
}

interface LatLng {
    getLat: () => number;
    getLng: () => number;
}

interface KakaoMap {
    setCenter: (latlng: LatLng) => void;
    setLevel: (level: number) => void;
}

const MapBox = () => {
    useEffect(() => {
        const initializeMap = () => {
            if (window.kakao && window.kakao.maps) {
                const container = document.getElementById('map');
                if (container) {
                    const options = {
                        center: new window.kakao.maps.LatLng(37.517223, 127.041292),
                        level: 3,
                    };

                    const map = new window.kakao.maps.Map(container, options);
                    console.log(map);
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

    return <div id="map" style={{ width: "100vw", height: "100vh" }} />;
};

export default MapBox;