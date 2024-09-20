import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    padding:0px 20px;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    background-color: white;
`

export const Title = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: #333;

    margin-bottom: 48px;
`

export const InputFrame = styled.div`
    width:100%;
    margin-bottom: 24px;    

    display:flex;
    flex-direction: column;
    gap: 12px;
`

export const EmailInput = styled.input`
    font-size: 14px;
    font-weight: 400;
    color:#333;

    padding:12px 16px;
    border-radius:8px;
    border:1px solid #ddd;
`
export const PasswordInput = styled.input`
    font-size: 14px;
    font-weight: 400;
    color:#333;

    padding:12px 16px;
    border-radius:8px;
    border:1px solid #ddd;
`

export const SubmitButton = styled.button`
    width: 100%;
    
    border:none;
    border-radius:8px;
    color:white;
    padding:12px 0;
    background-color:var(--brandColor);
`

export const FindPassword = styled.p`
    font-size: 12px;
    color: #888;

    margin-top: 12px;
`

// Absolute
export const BackTitle = styled.p`
    font-size: 12px;
    color:#888;

    position:absolute;
    top:32px;
    left:20px;
`