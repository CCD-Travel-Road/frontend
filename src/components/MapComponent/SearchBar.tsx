import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchIcon />
            <SearchInput type="text" placeholder="장소를 검색하세요." />
        </SearchBarContainer>
    );
};

export default SearchBar;

const SearchBarContainer = styled.div`
    position: absolute; /* Absolute positioning to overlay */
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    border: 1px solid ${colors.mainColor};
    border-radius: 8px;
    padding: 8px 12px;
    background-color: #fff;
    width: 90%;
    z-index: 10;
`;

const SearchIcon = styled(CiSearch)`
    color: ${colors.mainColor};
    font-size: 20px;
    margin-right: 8px;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    font-size: 14px;
    color: #888888;
    width: 100%;
`;