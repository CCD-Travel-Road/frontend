import styled from 'styled-components';

export const EntireContainer = styled.div`
    width: 100vw;
`;

export const ContentsFrame = styled.div`
    width: 100%;
    min-height:100vh;
    padding:12px 20px 0px 20px;

    background:white;
`;

export const SelectFrame = styled.div`
    display:flex;
    align-items:center;

    width:100%;
    gap:12px;
    margin-bottom:40px;
`;

export const CommunityFilter = styled.select`
    border-radius:50px;
    border:1px solid #E7E7E7;

    padding:12px 16px;
    background:white;
    color:var(--textColor);
`;

export const OptionFilter = styled.option`
    width:fit-content;
    font-size:12px;
    font-weight: 400;
`;