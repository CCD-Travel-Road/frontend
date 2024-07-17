import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import NavigationItem from "./NavigationItem";

// image
import homeActive from "../../images/home_active.png"
import homeInActive from "../../images/home_inactive.png"
import viewActive from "../../images/view_active.png"
import viewInActive from "../../images/view_inactive.png"
import createActive from "../../images/create_active.png"
import createInActive from "../../images/create_inactive.png"
import communityActive from "../../images/community_active.png"
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
    const location = useLocation();

    return (

        <Wrapper>

            <ClickFrame onClick={() => {nav('/')}}>
                <NavigationItem title="홈" icon={location.pathname === '/' ? homeActive : homeInActive} 
                                active={location.pathname === "/"}/>
            </ClickFrame>

            <ClickFrame onClick={() => {nav('/view')}}>
                <NavigationItem title="여행 조회" icon={location.pathname === '/view' ? viewActive : viewInActive}
                                active={location.pathname === "/view"} />
            </ClickFrame>
            
            <ClickFrame onClick={() => {nav('/setDate')}}>
                <NavigationItem title="여행 제작" icon={location.pathname === '/setDate' ? createActive : createInActive} 
                                active={location.pathname === "/setDate"}/>
            </ClickFrame>

            <ClickFrame onClick={() => {nav('/community')}}>
                <NavigationItem title="커뮤니티" icon={location.pathname === '/community' ? communityActive : communityInActive}
                                active={location.pathname === "/community"}/>
            </ClickFrame>
            
        </Wrapper>
    )

}

export default Navigation;