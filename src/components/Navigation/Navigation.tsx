import React from "react";
import styled from "styled-components";

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

function Navigation() {

    return (

        <Wrapper>
            <NavigationItem title="홈" icon={homeActive}/>
            <NavigationItem title="여행 조회" icon={viewInActive}/>
            <NavigationItem title="여행 제작" icon={createInActive}/>
            <NavigationItem title="커뮤니티" icon={communityInActive}/>
        </Wrapper>
    )

}

export default Navigation;