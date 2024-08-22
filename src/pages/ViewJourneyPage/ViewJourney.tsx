import { useState, useEffect } from "react";

// components
import Navigation from "src/components/Navigation/Navigation";
import FunctionHeader from "src/components/Header/FunctionHeader";
import SearchBar from "src/components/SearchBar";
import FuncButton from "src/components/Button/FuncButton";
import FilterSlide from "./FilterSlide";
import ViewList from "./ViewList";

import plusIcon from "../../images/plus.png";
import * as T from "./Styles";
import { db } from "../../firebase";
import filterIcon from "../../images/filter.png";

function ViewJourney() {
    const [data, setData] = useState([]);
    const [isClick, setIsClick] = useState(false);

    const handleFilter = () => {
        setIsClick(!isClick);
    };

    useEffect(() => {
        const tempData = [];

        db.collection('userJourneyList').get().then((qs) => {
            qs.forEach((doc) => {
                tempData.push(doc.data());
            });
            setData(tempData);
        });
    }, []);

    return (
        <T.EntireContainer>
            <T.BlackOverlay onClick={handleFilter} active={isClick}/>
            <FunctionHeader content="여행 조회" />

            <T.ContentsFrame>
                <SearchBar placeholder="여행제목을 검색하세요." />
                <T.FilterFrame onClick={handleFilter}>
                    <T.FilterElements>기간 · 예산</T.FilterElements>
                    <T.DetailsFilter src={filterIcon} />
                </T.FilterFrame>

                <T.ViewListContainer>
                    <T.ViewListTotalCount>전체 {data.length}</T.ViewListTotalCount>
                    <ViewList posts={data} />
                </T.ViewListContainer>
            </T.ContentsFrame>
            
            <FuncButton text="코스 추가하기" imageSrc={plusIcon} navUrl="setDate" includeIcon />

            <Navigation />

            {/* isClick 상태를 active prop으로 전달 */}
            <FilterSlide active={isClick} />
        </T.EntireContainer>
    );
}

export default ViewJourney;