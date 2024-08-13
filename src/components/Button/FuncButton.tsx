import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width:calc(100% - 40px);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:12px 0px;

    position:fixed;
    bottom:122.5px;
    left:50%;
    transform:translateX(-50%);
    background-color:var(--brandColor);
    border-radius: 8px;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color:white;

    text-align:center;
`

function FuncButton(props) {

    const { onClick, text } = props;

    return (

        <Wrapper onClick={onClick}>
            <Text>{text}</Text>
        </Wrapper>

        
    )
}

FuncButton.propTypes = {
    onClick: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default FuncButton;