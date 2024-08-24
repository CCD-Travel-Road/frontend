import { useState } from 'react';

import PropTypes from 'prop-types';
import * as T from "./FilterSlideStyles";

function FilterSlide({ active }: { active: boolean }) {

    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleClick = (buttonName: string) => {
        if (selectedButton === buttonName) {
            setSelectedButton(null); // 이미 선택된 버튼을 클릭하면 선택 해제
        } else {
            setSelectedButton(buttonName); // 선택된 버튼 업데이트
            console.log(`선택된 기간 : ${buttonName}`) // 선택 버튼 콘솔
        }
    };

    // 예산 최대, 최소
    const [isCostAcitve, setIsCostAcitve] = useState<string | null>("min");

    // 선택된 것에 따라 텍스트 변경 Frame 변경
    const handleRange = (e) => {
        
        if (isCostAcitve === "min") {
            setMinCost(`${e.target.value}원`);
            console.log(`최솟값은 ${e.target.value}`)
        } else {
            setMaxCost(`${e.target.value}원`)
            console.log(`최댓값은 ${e.target.value}`)
        }
    }

    const handleCost = (clickCost: string) => {
        setIsCostAcitve(clickCost)
    }

    const [minCost, setMinCost] = useState("0원");
    const [maxCost, setMaxCost] = useState("0원");

    return (

        <T.Wrapper active={active}>
            <T.FlingBar />
            
            <T.Title>여행 조회 설정</T.Title>

            <T.PeriodContainer>
                <T.SubTitle>기간</T.SubTitle>

                <T.ChoiceButtonFrame>
                    <T.ChoiceButton isFilter={selectedButton  === '최근 1개월'} onClick={() => handleClick('최근 1개월')}>최근 1개월</T.ChoiceButton>
                    <T.ChoiceButton isFilter={selectedButton  === '최근 3개월'} onClick={() => handleClick('최근 3개월')}>최근 3개월</T.ChoiceButton>
                    <T.ChoiceButton isFilter={selectedButton  === '최근 6개월'} onClick={() => handleClick('최근 6개월')}>최근 6개월</T.ChoiceButton>
                    <T.ChoiceButton isFilter={selectedButton  === '직접선택'} onClick={() => handleClick('직접선택')}>직접선택</T.ChoiceButton>
                </T.ChoiceButtonFrame>

            </T.PeriodContainer>

            <T.CostContainer>
                <T.SubTitle>예산</T.SubTitle>

                <T.CostInputFrame>
                    <T.CostInputBar onChange={handleRange} min="0" max="1000000" type="range" step="10000"/>
                    <T.CostViewFrame>

                        {/* 최솟값 */}
                        <T.CostMinimumFrame isCost={isCostAcitve === 'min'} onClick={() => handleCost('min')}>
                            <T.CostMinimum isCost={isCostAcitve === 'min'} onClick={() => handleCost('min')}>{minCost}</T.CostMinimum>
                        </T.CostMinimumFrame>

                        {/* 최댓값 */}
                        <T.CostMaximumFrame isCost={isCostAcitve === 'max'} onClick={() => handleCost('max')}>
                            <T.CostMaximum isCost={isCostAcitve === 'max'} onClick={() => handleCost('max')}>{maxCost}</T.CostMaximum>
                        </T.CostMaximumFrame>
                    </T.CostViewFrame>
                </T.CostInputFrame>
            </T.CostContainer>

            <T.CheckButton>조회하기</T.CheckButton>
        </T.Wrapper>

    );
}

FilterSlide.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default FilterSlide;