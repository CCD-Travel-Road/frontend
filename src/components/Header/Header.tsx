import styled from "styled-components";
import { FaAngleLeft } from 'react-icons/fa6';
import HeaderUtil from "./HeaderUtil";

interface HeaderProps {
    text: string;
}

function Header({ text }: HeaderProps) {
    return (
        <HeaderWrapper>
            <TextContainer>
                <BackButton><FaAngleLeft /></BackButton>
                <Text>{text}</Text>
            </TextContainer>
            <HeaderUtil />
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background-color: white;
`;

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const BackButton = styled.button`
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #010101;
`;

const Text = styled.span`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #010101;
`;
