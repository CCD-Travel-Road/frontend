// components
import Navigation from "src/components/Navigation/Navigation";
import MainTitle from "src/components/MainTitle";
import CancleText from "src/components/CancleText";

import QestionTitle from "./CreateJourneyCompnent/QestionTItle";
import AnswerButton from "./CreateJourneyCompnent/AnswerButton";

import * as T from './BStyles';

function ASetDate() {

    return (
        <T.EntireContainer>
            <T.TitleFrame>
                <CancleText />
                <MainTitle content="기본적인 여행정보를 입력해주세요!" />
                <T.SubTItle>대화형은 AI챗봇과의 대화를 통해 정보를 입력합니다.</T.SubTItle>
            </T.TitleFrame>

            <T.TapMenu>
                <T.TapMenuItem>선택형</T.TapMenuItem>
                <T.TapMenuItem>대화형</T.TapMenuItem>

                <T.ActiveBar/>
            </T.TapMenu>

            <T.ContentFrame>
                <QestionTitle content="🤔 누구랑 가시나요?" />
                <T.AnswerFrame>
                    <AnswerButton contents="친구"/>
                    <AnswerButton contents="가족"/>
                    <AnswerButton contents="회사동료"/>
                    <AnswerButton contents="지인"/>
                    <AnswerButton contents="기타"/>
                    <AnswerButton contents="모르겠어요"/>
                </T.AnswerFrame>
                
            </T.ContentFrame>

            <Navigation />
        </T.EntireContainer>
    );
}

export default ASetDate;