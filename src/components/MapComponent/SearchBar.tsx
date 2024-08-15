import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchedLocationState } from 'src/recoil/atoms';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [, setSearchedLocation] = useRecoilState(searchedLocationState);

    const handleSearch = () => {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(searchTerm, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
                const firstPlace = data[0];
                const latlng = new window.kakao.maps.LatLng(firstPlace.y, firstPlace.x);
                setSearchedLocation({
                    lat: latlng.getLat(),
                    lng: latlng.getLng(),
                    placeName: firstPlace.place_name,
                    roadAddress: firstPlace.road_address?.address_name || '',
                });
                setSearchTerm('');
            }
        });
    };

    return (
        <SearchBarContainer>
            <CiSearch color={colors.mainColor} style={{ marginRight: '8px' }} />
            <SearchInput
                type="text"
                placeholder="장소를 검색하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
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

const SearchInput = styled.input`
    border: none;
    outline: none;
    font-size: 14px;
    color: #888888;
    width: 100%;
`;