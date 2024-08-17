// components
import Navigation from "src/components/Navigation/Navigation";
import FunctionHeader from "src/components/Header/FunctionHeader";
import SearchBar from "src/components/SearchBar";

import * as T from "./Styles"



function ViewJourney() {

    return (

        <T.EntireContainer>

            <FunctionHeader content="여행 조회" />

            <T.ContentsFrame>
                <SearchBar placeholder="여행제목을 검색하세요."/>

            </T.ContentsFrame>
            


            <Navigation/>

        </T.EntireContainer>

    );
}

export default ViewJourney;