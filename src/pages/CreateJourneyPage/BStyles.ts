import styled from 'styled-components';

export const EntireContainer = styled.div`
    width: 100%;
`;

// Top
export const TitleFrame = styled.div`
    width: 100%;
    padding: 20px;
    z-index: 2;
    background-color: #fff;
`;

export const TapMenu = styled.div`
    width:100%;
    padding:20px 0px;
    text-align:center;

    display:flex;
    background-color: white;
    position:relative;
`;

export const TapMenuItem = styled.div`
    width:50%;

    font-size: 14px;
    font-weight: 400;
    color:#888;
`;

export const ActiveBar = styled.div`
    width:50%;
    height:4px;
    background-color:#2958DB;
    
    position:absolute;
    bottom:0px;
    left:0px;
`;

// Content
export const ContentFrame = styled.div`
    width: 100%;
    height: 100%; 
    padding:24px 20px;
    overflow-y: auto;
`;

export const SubTItle = styled.div`
    font-size: 14px;
    font-weight: 400;
    color:#888;

    margin-top: 4px;
`;

export const AnswerFrame = styled.div`
    display:flex;
    flex-wrap:wrap;
`;