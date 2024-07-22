// components
import Navigation from "src/components/Navigation/Navigation";
import MainTitle from "src/components/MainTitle";
import * as T from './Styles';

function ASetDate() {

    return (
        <T.EntireContainer>
            <T.TitleFrame>
                <MainTitle content="기본적인 여행정보를 입력해주세요!" />
            </T.TitleFrame>
            <T.ContentFrame />
            <Navigation />
        </T.EntireContainer>
    );
}

export default ASetDate;