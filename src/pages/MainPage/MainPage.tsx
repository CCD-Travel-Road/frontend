<<<<<<< Updated upstream
import React from "react";
import styled from "styled-components";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> Stashed changes

import Navigation from "src/components/Navigation/Navigation";


const Wrapper = styled.div`
    width: 100vw;
`;

function MainPage() {

    return (

<<<<<<< Updated upstream
        <Wrapper>

            <Navigation/>
        </Wrapper>
=======
        <T.EntireContainer>
            <MainHeader />

            {/* 메인페이지 배너 */}
            <T.BannerFrame>

                {/* 유저관련 텍스트 프레임 */}
                <T.UserTextFrame>
                    <T.Title>안녕하세요 김희찬님</T.Title>
                    <T.SubTitle>새로운 여행을 떠나보세요!</T.SubTitle>

                    <T.UserInteractionBtn onClick={() => { nav('/setDate') }}>
                        <T.BtnText>여행 만들기</T.BtnText>
                    </T.UserInteractionBtn>
                </T.UserTextFrame>

                {/* UI용 일러스트 이미지 프레임 */}
                <T.UIImage src={bannerElementA} />

            </T.BannerFrame>

            {/* 콘텐츠 */}
            <T.ContentFrame>
                <MainTitle content="요즘 인기많은 여행 코스에요." />
            </T.ContentFrame>


            <Navigation />
        </T.EntireContainer>
>>>>>>> Stashed changes

    );
}

export default MainPage;