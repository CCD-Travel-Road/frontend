import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    background-color:var(--brandColor);

    padding:0 20px;
`;

export const Logo = styled.p`
    font-size: 36px;
    font-weight: 500;
    color:white;
    font-family: "Sansita Swashed", system-ui;

    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;

// LoginContainer
export const LoginContainer = styled.div`
    display: flex;
    flex-direction:column;
    height:fit-content;
    width:100%;
    padding:0px 20px;

    position:absolute;
    bottom:60px;
    left:0;
`;

// UserLogin
export const UserLogin = styled.div`
    text-align:center;
    width: 100%;
    background:white;

    border-radius:8px;
    padding:12px 0px;
    margin-bottom:12px;
`;

export const UserLoginText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color:var(--brandColor);

    width: 100%;
`;

// StoreLogin
export const StoreLogin = styled.div`
    text-align:center;
    width: 100%;
    background:transparent;
    border:1px solid white;

    border-radius:8px;
    padding:12px 0px;
`;

export const StoreLoginText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color:white;

    width: 100%;
`;

// LoginUtilFrame
export const LoginUtilFrame = styled.div`
    margin-top:20px;
    display:flex;

    width: 50%;
`;

export const SignUp = styled.p`
    font-size: 12px;
    font-weight: 400;
    color:white;
`;

export const FindPW = styled.p`
    font-size: 12px;
    font-weight: 400;
    color:white;
`;