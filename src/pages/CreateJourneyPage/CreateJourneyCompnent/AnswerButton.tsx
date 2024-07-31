import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width:fit-content;

    background-color:white;
    padding:8px 24px;
    border-radius:40px;
    margin-right: 12px;
    margin-bottom: 12px;

    &:last-child {
        margin-right: 0;
    }
`

const Answer = styled.p`
    font-size:12px;
    font-weight:400;

    color:var(--textColor);
`

function AnswerButton(props) {

    const { value } = props;

    return (
        
        <Wrapper>
            <Answer>{value}</Answer>
        </Wrapper>
        
    )
}

AnswerButton.propTypes = {
    value: PropTypes.string.isRequired,
};

export default AnswerButton;