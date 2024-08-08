import { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width:fit-content;

    background-color:white;
    padding:12px 24px;
    border-radius:40px;
    margin-right: 12px;
    margin-bottom: 12px;
`

const AcitveWrapper = styled.div`
    width:fit-content;

    background-color:var(--brandColor);
    padding:12px 24px;
    border-radius:40px;
    margin-right: 12px;
    margin-bottom: 12px;
`

const Answer = styled.p`
    font-size:12px;
    font-weight:400;

    color:var(--textColor);
`

const AcitveAnswer = styled.p`
    font-size:12px;
    font-weight:400;

    color:white;
    background-color:var(--brandColor);
`

function AnswerButton(props) {

    const [isActive, SetisActive] = useState(false);

    const ClickAnswerButton = () => {

        if (isActive === false) {
            SetisActive(true)
        } else SetisActive(false)
        
        console.log(isActive)

    }

    const { contents } = props;

    return (

        <div>
            {
                isActive === false 
                    
                    ? 
                    <Wrapper onClick={ClickAnswerButton}>
                        <Answer>{contents}</Answer>
                    </Wrapper> 
                    : <AcitveWrapper onClick={ClickAnswerButton}>
                        <AcitveAnswer>{contents}</AcitveAnswer>
                    </AcitveWrapper>

            }
        </div>
        
    )
}

AnswerButton.propTypes = {
    contents: PropTypes.string.isRequired,
};

export default AnswerButton;