import { atom } from 'recoil';

export const dateRangeState = atom({
    key: 'dateRangeState', 
    default: {
        startDate: new Date(),
        endDate: new Date(),
    },
});