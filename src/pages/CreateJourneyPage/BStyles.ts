import styled from 'styled-components';

interface TapMenuItemProps {
    isActive: boolean;
}

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

export const TapMenuItem = styled.div<TapMenuItemProps>`
    width:50%;

    font-size: 14px;
    font-weight: 400;
    color:${(props) => (props.isActive ? '#333333' : '#888888')};
`

export const ActiveBar = styled.div<TapMenuItemProps>`
    width:50%;
    height:4px;
    background-color:#2958DB;
    
    position:absolute;
    bottom:0px;
    left:${(props) => (props.isActive ? '0px' : '50%')};
    transition:all .3s;
`;

// Content
export const ContentContainer = styled.div`
    width:100%;
    margin-bottom:102.5px;
    overflow:scroll;
`

export const ContentFrame = styled.div`
    width: 100%;
    height: 100%; 
    margin-bottom:36px;
    padding:0px 20px;
    
    overflow-y: auto;

    &:first-child {
        margin-top:24px;
    }

    &:last-child {
        margin-bottom:20px;
    }
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

// #############
// 대화형
// #############

export const TextInputFrame = styled.div`
    width: 100%;

    padding:0px 20px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    gap:16px;

    position:absolute;
    bottom:calc(102.5px + 20px);
`;

export const TextInput = styled.input`
    width: 100%;
    padding:12px 16px;
    border:1px solid var(--brandColor);
    border-radius: 8px;

    font-size:14px;
    color:#333;

    &:focus {
        outline:none;
    }
`;

export const SendButton = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    padding:12px;
    background-color:var(--brandColor);
    border-radius:8px;
`;

export const SendImage = styled.img`
    width:20px;
    height: 20px;
`;