import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
    interface Window {
        kakao: {
            maps: {
                Map: new (container: HTMLElement | null, options: { center: { lat: number; lng: number }; level: number }) => void;
                LatLng: new (lat: number, lng: number) => { lat: number; lng: number };
            };
        };
    }
}

// 지도 컨테이너 스타일 정의
const MapContainer = styled.div`
    width: 100%;
    height: 400px;
`;

function Map() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f690bf6830695ebdf8a28b91efcee118&autoload=false&libraries=services,clusterer`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao && window.kakao.maps) {

                const container = document.getElementById('map');
                if (container) {
                    const options = {
                        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                        level: 3,
                    };
                    const map = new window.kakao.maps.Map(container, options);
                    // 'map' 변수는 나중에 필요할 수 있으므로 할당합니다.
                    console.log(map);
                }
            }
        };
    }, []);

    return <MapContainer id="map" />;
}

export default Map;
