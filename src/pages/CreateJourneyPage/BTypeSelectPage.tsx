import { useState } from "react";

// components
import Navigation from "src/components/Navigation/Navigation";
import MainTitle from "src/components/MainTitle";
import CancleText from "src/components/CancleText";

import QestionTitle from "./CreateJourneyCompnent/QestionTItle";
import AnswerButton from "./CreateJourneyCompnent/AnswerButton";

import * as T from './BStyles';

function BSetType() {

    // 선택된 탭 상태
    const [activeTab, setActiveTab] = useState('선택형');

    // 선택형 대답
    const [activeAnswerForWho, setActiveAnswerForWho] = useState(null);
    const [activeAnswerBudget, setActiveAnswerBudget] = useState(null);
    const [activeAnswerPurpose, setActiveAnswerPurpose] = useState(null);

    return (
        <T.EntireContainer>
            <T.TitleFrame>
                <CancleText />
                <MainTitle content="기본적인 여행정보를 입력해주세요!" />
                <T.SubTItle>대화형은 AI챗봇과의 대화를 통해 정보를 입력합니다.</T.SubTItle>
            </T.TitleFrame>

            <T.TapMenu>
                <T.TapMenuItem isActive={activeTab === "선택형"} onClick={() => setActiveTab('선택형')}>선택형</T.TapMenuItem>
                <T.TapMenuItem isActive={activeTab === "대화형"} onClick={() => setActiveTab('대화형')}>대화형</T.TapMenuItem>

                <T.ActiveBar isActive={activeTab === "선택형"}/>
            </T.TapMenu>

            <T.ContentFrame>
                <QestionTitle content="🤔 누구랑 가시나요?" />
                <T.AnswerFrame>
                    {["친구", "가족", "회사동료", "지인", "기타", "구분이 애매해요"].map((answer) => (
                        <AnswerButton
                            key={answer}
                            contents={answer}
                            isActive={activeAnswerForWho === answer}
                            onClick={() => setActiveAnswerForWho(answer)}
                        />
                    ))}
                </T.AnswerFrame>
            </T.ContentFrame>

            <T.ContentFrame>
                <QestionTitle content="🤔 예산은 얼마정도 생각중이세요?" />
                <T.AnswerFrame>
                    {["상관없음", "통크고 거하게!", "소소하게..", "쓰는대로 쓸거에요", "직접 고르고 싶어요!"].map((answer) => (
                        <AnswerButton
                            key={answer}
                            contents={answer}
                            isActive={activeAnswerBudget === answer}
                            onClick={() => setActiveAnswerBudget(answer)}
                        />
                    ))}
                </T.AnswerFrame>
            </T.ContentFrame>

            <T.ContentFrame>
                <QestionTitle content="🤔 여행의 목적이 뭐에요?" />
                <T.AnswerFrame>
                    {["힐링", "재미", "액티비티", "그냥", "맛집 탐방", "우정", "사랑", "휴식"].map((answer) => (
                        <AnswerButton
                            key={answer}
                            contents={answer}
                            isActive={activeAnswerPurpose === answer}
                            onClick={() => setActiveAnswerPurpose(answer)}
                        />
                    ))}
                </T.AnswerFrame>
            </T.ContentFrame>
            {/* <T.ContentFrame>
                <QestionTitle content="🤔 예산은 얼마정도 생각중이세요?" />
                <T.AnswerFrame>
                    <AnswerButton contents="상관없음"/>
                    <AnswerButton contents="통크고 거하게!"/>
                    <AnswerButton contents="소소하게.."/>
                    <AnswerButton contents="쓰는대로 쓸거에요"/>
                    <AnswerButton contents="직접 고르고 싶어요!"/>
                </T.AnswerFrame>
            </T.ContentFrame>

            <T.ContentFrame>
                <QestionTitle content="🤔 여행의 목적이 뭐에요?" />
                <T.AnswerFrame>
                    <AnswerButton contents="힐링"/>
                    <AnswerButton contents="재미"/>
                    <AnswerButton contents="액티비티"/>
                    <AnswerButton contents="그냥"/>
                    <AnswerButton contents="맛집 탐방"/>
                    <AnswerButton contents="우정"/>
                    <AnswerButton contents="사랑"/>
                    <AnswerButton contents="휴식"/>
                </T.AnswerFrame>
            </T.ContentFrame> */}

            <Navigation />
        </T.EntireContainer>
    );
}

export default BSetType;