import React from "react";
import styled from "styled-components";

// components
import Navigation from "src/components/Navigation/Navigation";
import MainHeader from "src/components/Header/MainHeader";


const Wrapper = styled.div`
    width: 100vw;
`;

function MainPage() {

    return (

        <Wrapper>
            <MainHeader/>

            <Navigation/>
        </Wrapper>

    );
}

export default MainPage;