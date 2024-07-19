import styled from "styled-components";

import HeaderUtil from "./HeaderUtil";

// styled
const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content:space-between;

    padding:16px 20px;
    background-color:white;
`

const Logo = styled.p`
    font-size:24px;
    font-weight:500;
    color:var(--brandColor);
    font-family: "Sansita Swashed", system-ui;
`

function MainHeader() {

    return (

        <Wrapper>

            <Logo>YEORO</Logo>
            <HeaderUtil />

        </Wrapper>
    )

}

export default MainHeader;