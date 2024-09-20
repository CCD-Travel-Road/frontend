import { useNavigate } from 'react-router-dom';
import * as T from './UserLoginStyles';

function UserLogin() {

    const navigate = useNavigate();

    return (

        <T.Wrapper>
            <T.BackTitle onClick={() => navigate(-1)}>돌아가기</T.BackTitle>

            <T.Title>로그인</T.Title>

            <T.InputFrame>
                <T.EmailInput placeholder='이메일을 입력해주세요.' />
                <T.PasswordInput placeholder='비밀번호를 입력해주세요.' />
            </T.InputFrame>

            <T.SubmitButton>로그인</T.SubmitButton>
            <T.FindPassword>비밀번호 찾기</T.FindPassword>

        </T.Wrapper>

    )

}

export default UserLogin;