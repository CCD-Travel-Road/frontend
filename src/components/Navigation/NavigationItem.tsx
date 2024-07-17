import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

// styled
const Wrapper = styled.div<{ active: boolean }>`
    width:100%;
    
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:12px;
    padding:12px 0px;

    color: ${(props) => (props.active ? "#2958DB" : "#333333")};
`

const NavIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit:cover;
`

const NavTitle = styled.p`
    font-size:12px;
    
`

function NavigationItem(props) {
    
    const { icon, title, active } = props;

    return (

        <Wrapper active={active}>
            <NavIcon src={icon}/>
            <NavTitle>{title}</NavTitle>
        </Wrapper>
    )

}

NavigationItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default NavigationItem;