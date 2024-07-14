import React from "react";
import styled from "styled-components";

import Navigation from "src/components/Navigation/Navigation";


const Wrapper = styled.div`
    width: 100vw;
`;

function MainPage() {

    return (

        <Wrapper>

            <Navigation/>
        </Wrapper>

    );
}

export default MainPage;