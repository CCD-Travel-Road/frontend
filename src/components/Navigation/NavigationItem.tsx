import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

// styled
const Wrapper = styled.div`
    width:25%;
    
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:12px;
    padding:12px 0px;
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
    
    const { icon, title } = props;

    return (

        <Wrapper>
            <NavIcon src={icon}/>
            <NavTitle>{title}</NavTitle>
        </Wrapper>
    )

}

NavigationItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavigationItem;