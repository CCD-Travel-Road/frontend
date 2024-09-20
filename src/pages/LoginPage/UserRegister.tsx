import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as T from './UserRegisterStyles';

function UserRegister() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('남자');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            email,
            password,
            age,
            gender
        };

        const signupUrl = `${process.env.REACT_APP_API_URL}/api/public/users/create`;

        try {
            const response = await axios.post(signupUrl, formData);
            console.log('User registered:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('회원가입 실패:', error);
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <T.Wrapper>
            <T.BackTitle onClick={() => navigate(-1)}>돌아가기</T.BackTitle>

            <T.Title>회원가입</T.Title>

            <T.FormFrame onSubmit={handleSubmit} as="form">
                <T.EmailFrame>
                    <T.EmailTitle>이메일</T.EmailTitle>
                    <T.EmailInput
                        placeholder='이메일을 입력해주세요.'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <T.CheckEmail>중복확인</T.CheckEmail>
                </T.EmailFrame>

                <T.PasswordFrame>
                    <T.PasswordTitle>비밀번호</T.PasswordTitle>
                    <T.PasswordInput
                        type="password"
                        placeholder='비밀번호를 입력해주세요.'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </T.PasswordFrame>

                <T.AgeGenderFrame>
                    <T.AgeFrame>
                        <T.AgeTitle>나이</T.AgeTitle>
                        <T.AgeInput
                            type="number"
                            placeholder='나이를 입력해주세요.'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </T.AgeFrame>

                    <T.GenderFrame>
                        <T.GenderTitle>성별</T.GenderTitle>
                        <T.GenderSelect
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <T.GenderOption value="남자">남자</T.GenderOption>
                            <T.GenderOption value="여자">여자</T.GenderOption>
                        </T.GenderSelect>
                    </T.GenderFrame>
                </T.AgeGenderFrame>

                <T.SubmitButton type="submit">회원가입</T.SubmitButton>
            </T.FormFrame>
        </T.Wrapper>
    );
}

export default UserRegister;