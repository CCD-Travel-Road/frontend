import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
    width:fit-content;
`

const Wrapper = styled.div`
    width: fit-content;
    background-color: white;
    padding: 12px 24px;
    border-radius: 40px;
    margin-right: 12px;
    margin-bottom: 12px;
`;

const ActiveWrapper = styled.div`
    width: fit-content;
    background-color: var(--brandColor);
    padding: 12px 24px;
    border-radius: 40px;
    margin-right: 12px;
    margin-bottom: 12px;
`;

const Answer = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: var(--textColor);
`;

const ActiveAnswer = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: white;
    background-color: var(--brandColor);
`;

function AnswerButton({ contents, isActive, onClick }) {
    return (
        <Container onClick={onClick}>
            {isActive ? (
                <ActiveWrapper >
                    <ActiveAnswer>{contents}</ActiveAnswer>
                </ActiveWrapper>
            ) : (
                <Wrapper>
                    <Answer>{contents}</Answer>
                </Wrapper>
            )}
        </Container>
    );
}

AnswerButton.propTypes = {
    contents: PropTypes.string.isRequired,  // 버튼에 표시될 내용
    isActive: PropTypes.bool.isRequired,    // 활성화 여부를 부모에서 받음
    onClick: PropTypes.func.isRequired      // 클릭 시 실행할 함수
};

export default AnswerButton;