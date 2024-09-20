import { atom } from 'recoil';

export const dateRangeState = atom({
    key: 'dateRangeState',
    default: {
        startDate: new Date(),
        endDate: new Date(),
    },
});

export const selectedPlaceState = atom({
    key: "selectedPlaceState",
    default: {
        placeName: "",
        lat: 37.517223,
        lng: 127.041292,
        placeAddress: ""
    },
});
