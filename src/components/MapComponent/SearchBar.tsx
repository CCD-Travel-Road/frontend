import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedPlaceState } from 'src/recoil/atoms'; // 통일된 상태로 변경
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [, setSelectedPlace] = useRecoilState(selectedPlaceState); // selectedPlaceState로 상태 설정

    const handleSearch = () => {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(searchTerm, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
                const firstPlace = data[0];
                const latlng = new window.kakao.maps.LatLng(firstPlace.y, firstPlace.x);

                // selectedPlaceState를 업데이트
                setSelectedPlace({
                    placeName: firstPlace.place_name,
                    lat: latlng.getLat(),
                    lng: latlng.getLng(),
                    placeAddress: firstPlace.road_address?.address_name || '',
                });

                setSearchTerm(''); // 검색 후 입력창 초기화
            } else {
                alert("검색 결과가 없습니다.");
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
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    
    width:calc(100% - 40px);
    display:flex;
    align-items:center;
    background-color:white;
    border:1px solid var(--brandColor);
    border-radius:50px;

    padding:12px 16px;
    z-index: 10;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    font-size: 14px;
    color: #888888;
    width: 100%;
`;
