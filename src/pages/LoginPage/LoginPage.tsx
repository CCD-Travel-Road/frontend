import { useNavigate } from 'react-router-dom';
import * as T from './Styles';

function LoginPage() {

    const navigate = useNavigate();

    return (

        <T.Wrapper>
            
            <T.Logo>YeoRo</T.Logo>

            <T.LoginContainer>
                <T.UserLogin>
                    <T.UserLoginText onClick={() => navigate('/userLogin')}>로그인</T.UserLoginText>
                </T.UserLogin>
                <T.StoreLogin>
                    <T.StoreLoginText>가게 로그인</T.StoreLoginText>
                </T.StoreLogin>

                {/* LoginUtilFrame */}
                <T.LoginUtilFrame>
                    <T.SignUp onClick={() => navigate('/userRegister')}>회원가입</T.SignUp>
                    {/* <T.FindPW>비밀번호 찾기</T.FindPW> */}
                </T.LoginUtilFrame>
            </T.LoginContainer>
        </T.Wrapper>

    )

}

export default LoginPage;