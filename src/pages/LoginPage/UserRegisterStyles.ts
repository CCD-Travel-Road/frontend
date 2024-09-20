import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    padding:0px 20px;

    display:flex;
    flex-direction: column;
    justify-content:center;

    background-color: white;
`

export const Title = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: #333;

    margin-bottom:12px;
`

export const FormFrame = styled.div`
    width:100%;
    padding:16px 0px;

    border-top:1px solid #888;
`

export const EmailFrame = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;

    flex-wrap:wrap;
    margin-bottom:16px;
`

export const EmailTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #333;

    width:100%;
    margin-bottom:8px;
`

export const EmailInput = styled.input`
    width:68%;

    border:1px solid #DDDDDD;
    border-radius:8px;
    padding:12px 16px;

    font-size: 14px;
`

export const CheckEmail = styled.div`
    width:28%;

    font-size: 14px;
    font-weight: bold;
    color:#888;

    background-color:#F4F4F4;
    border:1px solid #F4F4F4;
    padding:12px 0px;
    text-align:center;
    border-radius:8px;
`

export const PasswordFrame = styled.div`
    width:100%;
    margin-bottom:16px;
`

export const PasswordTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #333;

    width:100%;
    margin-bottom:8px;
`

export const PasswordInput = styled.input`
    width:100%;

    border:1px solid #DDDDDD;
    border-radius:8px;
    padding:12px 16px;

    font-size: 14px;
`

export const AgeGenderFrame = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`

export const AgeFrame = styled.div`
    width:48%;
    margin-bottom:24px;
`

export const AgeTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #333;

    width:100%;
    margin-bottom:8px;
`

export const AgeInput = styled.input`
    width:100%;

    border:1px solid #DDDDDD;
    border-radius:8px;
    padding:12px 16px;

    font-size: 14px;
`

export const GenderFrame = styled.div`
    width:48%;
    margin-bottom:24px;
`

export const GenderTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #333;

    width:100%;
    margin-bottom:8px;
`
export const GenderSelect = styled.select`
    width:100%;

    border:1px solid #DDDDDD;
    border-radius:8px;
    padding:12px 16px;

    font-size: 14px;
`

export const GenderOption = styled.option`
    width:100%;
    color:#333;
`

export const SubmitButton = styled.button`
    width:100%;
    padding:12px;
    background-color:var(--brandColor);
    border-radius:8px;
    border:none;

    font-size: 14px;
    font-weight:bold;
    color:white;
`

// Absolute
export const BackTitle = styled.p`
    font-size: 12px;
    color:#888;

    position:absolute;
    top:32px;
    left:20px;
`