import styled from 'styled-components';

export const EntireContainer = styled.div`
    width: 100vw;
`;

// 메인페이지 배너
export const BannerFrame = styled.div`
    width: 100%;
    padding:12px 20px 8px 20px;
    
    display:flex;
    align-items:center;
`;

    // 유저관련 텍스트 프레임
    export const UserTextFrame = styled.div`
        width: 100%;
        height:calc(100% - 103px);
    `;

        export const Title = styled.p`
            font-size: 16px;
            font-weight:600;
            color:var(--textColor);
        `

        export const SubTitle = styled.p`
            font-size: 14px;
            font-weight:400;
            color:#666;
            margin:4px 0px 16px 0px;
        `

        export const UserInteractionBtn = styled.button`
            background-color:var(--brandColor);
            border:1px solid var(--brandColor);
            border-radius:8px;
            color:white;

            padding:8px 12px;
        `
            export const BtnText = styled.p`
                font-size: 14px;
                font-weight:400;
                color:#fff;
            `
    
    // UI용 일러스트 이미지 프레임
    export const UIImage = styled.img`
        width:50%;
        height:auto;
    `

// 콘텐츠
export const ContentFrame = styled.div`
        width:100%;
        height:500px;
        padding:32px 20px 0px 20px;
        background-color:#F9F9F9;
    `
