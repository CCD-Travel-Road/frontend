import { useNavigate } from 'react-router-dom';
import * as T from './UserRegisterStyles';

function UserRegister() {

    const navigate = useNavigate();

    return (

        <T.Wrapper>
            <T.BackTitle onClick={() => navigate(-1)}>돌아가기</T.BackTitle>

            <T.Title>회원가입</T.Title>

            <T.FormFrame>

                <T.EmailFrame>
                    <T.EmailTitle>이메일</T.EmailTitle>
                    <T.EmailInput placeholder='이메일을 입력해주세요.'/>
                    <T.CheckEmail>중복확인</T.CheckEmail>
                </T.EmailFrame>

                <T.PasswordFrame>
                    <T.PasswordTitle>비밀번호</T.PasswordTitle>
                    <T.PasswordInput placeholder='비밀번호를 입력해주세요.'/>
                </T.PasswordFrame>

                <T.AgeGenderFrame>
                    <T.AgeFrame>
                        <T.AgeTitle>나이</T.AgeTitle>
                        <T.AgeInput placeholder='나이를 입력해주세요.' />
                    </T.AgeFrame>

                    <T.GenderFrame>
                        <T.GenderTitle>성별</T.GenderTitle>
                        <T.GenderSelect>
                            <T.GenderOption value="남자">남자</T.GenderOption>
                            <T.GenderOption value="여자">여자</T.GenderOption>
                        </T.GenderSelect>
                    </T.GenderFrame>
                </T.AgeGenderFrame>

            </T.FormFrame>

        </T.Wrapper>

    )

}

export default UserRegister;