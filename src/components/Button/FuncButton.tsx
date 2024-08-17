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
    box-shadow:0px 2px 12px 0px rgba(0, 0, 0, 0.12);
`

const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color:white;

    text-align:center;
    margin-right:8px;
`

const Image = styled.img`
    width: 12px;
    height: 12px;
`

function FuncButton(props) {

    const { onClick, text, includeIcon, imageSrc } = props;

    return (

        <Wrapper onClick={onClick}>
            {
                includeIcon === true

                ?     // 이미지 아이콘이 있다면 
                    <Container>
                        <Text>{text}</Text>
                        <Image src={imageSrc}/>
                    </Container>
                
                :    // 이미지 아이콘이 없다면
                <Text>{text}</Text>
            }
        </Wrapper>

        
    )
}

FuncButton.propTypes = {
    onClick: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    includeIcon: PropTypes.bool.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default FuncButton;