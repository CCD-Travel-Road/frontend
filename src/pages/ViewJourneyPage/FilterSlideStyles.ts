import styled from 'styled-components';

interface WrapperProps {
    active: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    bottom: ${(props) => (props.active ? '0' : '-100%')};
    left: 0;
    right: 0;
    background-color: white;
    transition: bottom 0.4s ease;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    padding:12px 20px 36px 20px;
    border-radius:20px 20px 0px 0px;
`;

export const FlingBar = styled.div`
    width: 56px;
    background-color: #888;
    margin:0 auto;
    height:4px;
    border-radius:8px;
`;

export const Title = styled.p`
    font-size:16px;
    font-weight: 600;
    color:var(--textColor);
    margin:24px 0px;
`;

export const SubTitle = styled.p`
    font-size:12px;
    font-weight: 600;
    color:var(--textColor);
    margin-bottom:12px;
`;

// Period
export const PeriodContainer = styled.div`
    width: 100%;
`;

export const ChoiceButtonFrame = styled.div`
    display:flex;
    align-items:center;
    gap:12px;

    width: 100%;
    margin-bottom:24px;
`;

export const ChoiceButton = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:12px 0px;

    background-color:#f4f4f4;
    border-radius:8px;

    font-size: 12px;
    font-weight:600;
    color:var(--textColor);
`;

// Cost
export const CostContainer = styled.div`
    width: 100%;
`;

// Button
export const CheckButton = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:12px 0px;

    font-size: 14px;
    font-weight: 500;
    color:white;
    text-align:center;

    background-color:var(--brandColor);
    border-radius: 8px;
    box-shadow:0px 2px 12px 0px rgba(0, 0, 0, 0.12);
`;