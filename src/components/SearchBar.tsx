import styled from "styled-components";
import PropTypes from 'prop-types';

import searchIcon from "../images/search.png"

const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    background-color:#F4F4F4;
    border-radius:50px;

    margin-bottom:12px;
    padding:12px 16px;
`

const TextInput = styled.input`
    width:100%;
    font-size: 14px;
    color:var(--textColor);

    background-color:transparent;
    border:none;

    &:focus {
        outline:none;
    }
`

const SearchIcon = styled.img`
    width:12px;
    height:12px;
    margin-right:12px;
`

function SearchBar(props) {

    const { placeholder } = props;

    return (

        <Wrapper>

            <SearchIcon src={searchIcon}/>
            <TextInput placeholder={placeholder}/>

        </Wrapper>
        
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;