import styled from 'styled-components';

export const EntireContainer = styled.div`
    width: 100vw;
    min-height:100vh;

    background:white;
`;

export const ContentsFrame = styled.div`
    width: 100%;
    padding:12px 20px 0px 20px;

    background:white;
`;

// 유틸요소 ==================
export const FilterFrame = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-between;

    padding:12px 16px;
    border:1px solid #F4F4F4;
    border-radius:50px;
`;

export const FilterElements = styled.p`
    font-size:12px;
    font-weight: 400;
    color:var(--textColor);
`;

export const DetailsFilter = styled.img`
    width:16px;
    height:16px;
`;

// 사용자 여행 리스트 ==================
export const ViewListContainer = styled.div`
    width:100%;
    margin-top:32px;
`;

export const ViewListTotalCount = styled.p`
    font-size: 14px;
    color:#888;
`;