import { useState, useEffect } from "react";

// components
import Navigation from "src/components/Navigation/Navigation";
import FunctionHeader from "src/components/Header/FunctionHeader";
import SearchBar from "src/components/SearchBar";
import FuncButton from "src/components/Button/FuncButton";
import FilterSlide from "./FilterSlide";

import ViewList from "./ViewList";

import plusIcon from "../../images/plus.png"

import * as T from "./Styles"
import { db } from "../../firebase"
import filterIcon from "../../images/filter.png"

function ViewJourney() {

    const [data, setData] = useState([]);
    const [isClick, setIsClick] = useState(false);

    const handleFilter = () => {

        if (isClick === false) {
            setIsClick(true)
        } 
        else if (isClick === true) {
            setIsClick(false) 
        }
    }

    useEffect(() => {
        const tempData = [];

        db.collection('userJourneyList').get().then((qs) => {
            qs.forEach((doc) => {
                tempData.push(doc.data()) // <<===== doc마다 tempData를 배열에 추가
            })

            setData(tempData);
        })
    }, [])

    return (

        <T.EntireContainer>

            <FunctionHeader content="여행 조회" />

            <T.ContentsFrame>
                {/* 유틸요소 */}
                <SearchBar placeholder="여행제목을 검색하세요."/>
                <T.FilterFrame onClick={handleFilter}>
                    <T.FilterElements>기간 · 예산</T.FilterElements>
                    <T.DetailsFilter src={filterIcon}/>
                </T.FilterFrame>

                {/* 사용자 여행 리스트 */}
                <T.ViewListContainer>
                    <T.ViewListTotalCount>전체 {data.length}</T.ViewListTotalCount>

                    <ViewList posts={data} />
                </T.ViewListContainer>
            </T.ContentsFrame>
            
            <FuncButton text="코스 추가하기" imageSrc={plusIcon} 
                                            navUrl="setDate" 
                                            includeIcon/>
                                            
            {/* 네비게이션 */}
            <Navigation/>

            {/* 슬라이드 */}
            <FilterSlide/>

        </T.EntireContainer>

    );
}

export default ViewJourney;