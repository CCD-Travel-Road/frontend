import { useState } from "react";

import Navigation from "src/components/Navigation/Navigation";
import FunctionHeader from "src/components/Header/FunctionHeader";
import SearchBar from "src/components/SearchBar";

import * as T from "./Styles"


function Community() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (

        <T.EntireContainer>

            <FunctionHeader content="커뮤니티"/>
            <T.ContentsFrame>
                <SearchBar placeholder="검색어를 입력하세요." />
                <T.CommunityFilter type="select" value={selectedOption} onChange={handleChange}>
                    <T.OptionFilter value="옵션 1">옵션 1</T.OptionFilter>
                </T.CommunityFilter>
            </T.ContentsFrame>

            <Navigation />

        </T.EntireContainer>

    );
}

export default Community;