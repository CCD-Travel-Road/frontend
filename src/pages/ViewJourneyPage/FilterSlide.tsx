import PropTypes from 'prop-types';
import * as T from "./FilterSlideStyles";

function FilterSlide({ active }: { active: boolean }) {

    return (

        <T.Wrapper active={active}>
            <T.FlingBar />
            
            <T.Title>여행 조회 설정</T.Title>

            <T.PeriodContainer>
                <T.SubTitle>기간</T.SubTitle>

                <T.ChoiceButtonFrame>
                    <T.ChoiceButton>최근 1개월</T.ChoiceButton>
                    <T.ChoiceButton>최근 3개월</T.ChoiceButton>
                    <T.ChoiceButton>최근 6개월</T.ChoiceButton>
                    <T.ChoiceButton>직접선택</T.ChoiceButton>
                </T.ChoiceButtonFrame>

            </T.PeriodContainer>

            <T.CostContainer>
                <T.SubTitle>예산</T.SubTitle>
            </T.CostContainer>

            <T.CheckButton>조회하기</T.CheckButton>
        </T.Wrapper>

    );
}

FilterSlide.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default FilterSlide;