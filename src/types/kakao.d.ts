// src/types/kakao.d.ts

declare global {
    interface Window {
        kakao: kakao.maps.KakaoMaps;
    }
}

interface Kakao {
    maps: {
        load(callback: () => void): void;
        Map: new (container: HTMLElement | null, options: MapOptions) => KakaoMap;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        Marker: new (options: MarkerOptions) => KakaoMarker;
        InfoWindow: new (options?: InfoWindowOptions) => KakaoInfoWindow;
        event: {
            addListener(target: KakaoMap, event: string, callback: (event: any) => void): void;
        };
        services: {
            Geocoder: new () => Geocoder;
            Status: {
                OK: string;
                ERROR: string;
            };
        };
    };
}

interface MapOptions {
    center: KakaoLatLng;
    level: number;
}

interface KakaoLatLng {
    getLat(): number;
    getLng(): number;
}

interface KakaoMap {
    setCenter(latlng: KakaoLatLng): void;
    setLevel(level: number): void;
    getCenter(): KakaoLatLng;
}

interface MarkerOptions {
    position: KakaoLatLng;
}

interface KakaoMarker {
    setMap(map: KakaoMap): void;
    setPosition(latlng: KakaoLatLng): void;
}

interface InfoWindowOptions {
    content?: string;
}

interface KakaoInfoWindow {
    setContent(content: string): void;
    open(map: KakaoMap, marker: KakaoMarker): void;
    close(): void;
}

interface Geocoder {
    coord2Address(lng: number, lat: number, callback: (result: any, status: any) => void): void;
}

export {};
