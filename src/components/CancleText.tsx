import styled from "styled-components";

import cancleIcon from "../images/cancle.png"

const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    margin-bottom:16px;
`

const Text = styled.p`
    font-size:12px;
    font-weight:400;
    color:#888;
    margin-right:8px;
`

const Icon = styled.img`
    width:10px;
`

function CancleText() {

    return (

        <Wrapper>
            <Text>취소하기</Text>
            <Icon src={cancleIcon} />
        </Wrapper>
        
    )
}

export default CancleText;