import styled from 'styled-components';

export const EntireContainer = styled.div`
    width: 100%;
`;

// 콘텐츠
export const TitleFrame = styled.div`
    width: 100%;
    padding: 20px;
    z-index: 2;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
`;

export const ContentFrame = styled.div`
    width: 100%;
    height: 100%; 
    padding-top:95px; // TitleFrame의 높이값
    overflow-y: auto;
`;
