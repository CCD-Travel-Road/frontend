import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import guideimage from '../images/image 24.png'

ReactModal.setAppElement('#root');

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
    const navigate = useNavigate();

    const handleNoHelp = () => {
        navigate('/map');
    };

    const handleHelp = () => {
        navigate('/help');
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick
            style={customModalStyles}
        >
            <ModalContent>
                <Image src={guideimage} alt="Guide" />
                <TextContent>
                    <Title>AI의 도움을 통해 계획을 작성해보실래요?</Title>
                    <Subtitle>AI와 대화를 통해 코스를 추천해줍니다.</Subtitle>
                </TextContent>
                <ButtonContainer>
                    <ButtonLeft onClick={handleNoHelp}>이미 계획이있어요!</ButtonLeft>
                    <ButtonRight onClick={handleHelp}>도와주세요!</ButtonRight>
                </ButtonContainer>
            </ModalContent>
        </ReactModal>
    );
}

export default Modal;

const customModalStyles: ReactModal.Styles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: 10,
        position: "fixed",
        top: 0,
        left: 0,
    },
    content: {
        width: "90%",
        height: "40%",
        zIndex: 150,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        padding: "5%",
    },
};

const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 80px;
    height: auto;
    margin-bottom: 30px;
`;

const TextContent = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: 600; /* Semi-bold */
    color: #333333;
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: #888888;
    margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 7px;
    width: 100%;
    justify-content: space-between;
`;

const ButtonLeft = styled.button`
    width: 50%;
    padding: 10px;
    border-radius: 8px;
    background-color: #E7E7E7;
    color: #333333;
    border: none;
    cursor: pointer;
    font-size: 14px;
`;

const ButtonRight = styled.button`
    width: 50%;
    padding: 10px;
    border-radius: 8px;
    background-color: #2958DB;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    font-size: 14px;
`;