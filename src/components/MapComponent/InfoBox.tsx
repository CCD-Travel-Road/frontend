import styled from 'styled-components';

interface InfoBoxProps {
    placeName: string;
    roadAddress?: string;
    onAddClick: () => void;
    onDetailsClick: () => void;
}

const InfoBox = ({ placeName, roadAddress, onAddClick, onDetailsClick }: InfoBoxProps) => (
    <InfoBoxContainer hasRoadAddress={!!roadAddress}>
        <div style={{ flex: 1 }}>
            <Title>{placeName}</Title>
            {roadAddress && <Address>{roadAddress}</Address>}
        </div>
        {roadAddress && <Divider />}
        <ButtonContainer>
            <Button isPrimary onClick={onAddClick}>
                추가하기
            </Button>
            <Button isPrimary={false} onClick={onDetailsClick}>
                자세히 보기
            </Button>
        </ButtonContainer>
    </InfoBoxContainer>
);

export default InfoBox;


const InfoBoxContainer = styled.div<{ hasRoadAddress?: boolean }>`
    font-family: 'Pretendard';
    font-size: 14px;
    color: #333;
    width: 250px;
    height: ${({ hasRoadAddress }) => (hasRoadAddress ? '130px' : '100px')};
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    top: -140px; 
    left: -125px;
`;

const Title = styled.h2`
    margin: 5px;
    font-family: 'Pretendard';
    font-size: 16px;
    color: #333;
`;

const Address = styled.p`
    margin: 2px 5px;
    font-size: 14px;
    color: #666;
`;

const Divider = styled.div`
    height: 1px;
    background-color: #e7e7e7;
    margin: 10px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const Button = styled.button<{ isPrimary: boolean }>`
    padding: 10px;
    background-color: ${({ isPrimary }) => (isPrimary ? '#2958DB' : '#fff')};
    color: ${({ isPrimary }) => (isPrimary ? '#fff' : '#2958DB')};
    border: ${({ isPrimary }) => (isPrimary ? 'none' : '1px solid #2958DB')};
    border-radius: 8px;
    cursor: pointer;
    flex: 1;
`;
