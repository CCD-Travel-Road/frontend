import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import NavigationItem from "./NavigationItem";

// image
import homeActive from "../../images/home_active.png"
// import homeInActive from "../../images/home_inactive.png"
// import viewActive from "../../images/view_active.png"
import viewInActive from "../../images/view_inactive.png"
// import createActive from "../../images/create_active.png"
import createInActive from "../../images/create_inactive.png"
// import communityActive from "../../images/community_active.png"
import communityInActive from "../../images/community_inactive.png"

// styled
const Wrapper = styled.div`
    width:100%;
    display:flex;

    padding:12px 20px 20px 20px;
    background-color:white;
    box-shadow: 0 -4px 0px rgba(0, 0, 0, 0.04);

    position:fixed;
    bottom:0;
    gap:20px;
`

const ClickFrame = styled.div`
    width:25%;
`

function Navigation() {

    const nav = useNavigate();

    return (

        <Wrapper>

            <ClickFrame onClick={() => {nav('/')}}>
                <NavigationItem title="홈" icon={homeActive}/>
            </ClickFrame>

            <ClickFrame onClick={() => {nav('/')}}>
                <NavigationItem title="여행 조회" icon={viewInActive}/>
            </ClickFrame>
            
            <ClickFrame onClick={() => {nav('/setDate')}}>
                <NavigationItem title="여행 제작" icon={createInActive}/>
            </ClickFrame>


            <ClickFrame onClick={() => {nav('/')}}>
                <NavigationItem title="커뮤니티" icon={communityInActive}/>
            </ClickFrame>
            
        </Wrapper>
    )

}

export default Navigation;