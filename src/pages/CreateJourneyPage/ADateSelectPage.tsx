// components
import Navigation from "src/components/Navigation/Navigation";
import MainTitle from "src/components/MainTitle";
import ScrollableCalendar from "src/components/ScrollableCalendar";
import CancleText from "src/components/CancleText";

import * as T from './AStyles';

function ASetDate() {

    return (
        <T.EntireContainer>
            <T.TitleFrame>
                <CancleText />
                <MainTitle content="여행 기간을 선택해보세요!" />
            </T.TitleFrame>

            <T.ContentFrame>
                <ScrollableCalendar />
            </T.ContentFrame>

            <Navigation />
        </T.EntireContainer>
    );
}

export default ASetDate;