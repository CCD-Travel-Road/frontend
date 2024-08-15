import { atom } from 'recoil';

export const dateRangeState = atom({
    key: 'dateRangeState',
    default: {
        startDate: new Date(),
        endDate: new Date(),
    },
});

export const selectedLocationState = atom({
    key: 'selectedLocationState',
    default: { lat: 0, lng: 0 },
});

export const searchedLocationState = atom({
    key: 'searchedLocationState',
    default: {
      lat: 37.517223,
      lng: 127.041292,
      placeName: '',
      roadAddress: ''
    },
  });