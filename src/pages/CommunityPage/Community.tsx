import { useState } from "react";

import Navigation from "src/components/Navigation/Navigation";
import FunctionHeader from "src/components/Header/FunctionHeader";
import SearchBar from "src/components/SearchBar";
import MainTitle from "src/components/MainTitle";

import * as T from "./Styles"


function Community() {

    const [selectedOption, setSelectedOption] = useState('전체');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      console.log(selectedOption);
    };

    return (

        <T.EntireContainer>

            <FunctionHeader content="커뮤니티"/>
            <T.ContentsFrame>
                <SearchBar placeholder="검색어를 입력하세요." />

                <T.SelectFrame>
                    {/* 분류 1 */}
                    <T.CommunityFilter value={selectedOption} onChange={handleChange}>
                        <T.OptionFilter value="">전체</T.OptionFilter>
                        <T.OptionFilter value="지역">지역</T.OptionFilter>
                        <T.OptionFilter value="지역">지역</T.OptionFilter>
                        <T.OptionFilter value="지역">지역</T.OptionFilter>
                        <T.OptionFilter value="지역">지역</T.OptionFilter>
                        <T.OptionFilter value="지역">지역</T.OptionFilter>
                    </T.CommunityFilter>

                    {/* 분류 2 */}
                    <T.CommunityFilter value={selectedOption} onChange={handleChange}>
                        <T.OptionFilter value="">전체</T.OptionFilter>
                        <T.OptionFilter value="목적">목적</T.OptionFilter>
                        <T.OptionFilter value="목적">목적</T.OptionFilter>
                        <T.OptionFilter value="목적">목적</T.OptionFilter>
                        <T.OptionFilter value="목적">목적</T.OptionFilter>
                        <T.OptionFilter value="목적">목적</T.OptionFilter>
                    </T.CommunityFilter>
                </T.SelectFrame>

                <MainTitle content="편하게 쉬고 싶을 때 여긴 어때요?"/>
                
            </T.ContentsFrame>

            <Navigation />

        </T.EntireContainer>

    );
}

export default Community;