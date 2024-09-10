// import React from 'react';
// import styled from 'styled-components';
// import { useRecoilState } from 'recoil';
// import { PlaceInfo } from '../../types/types';

// interface CustomOverlayContentProps {
//     placeName: string;
//     address: string;
//     date: string;
//     onAddCourse?: () => void;
// }

// function CustomOverlayContent({ placeName, address, date, onAddCourse }: CustomOverlayContentProps) {
//     const [, setCourses] = useRecoilState(courseState);

//     const handleAddCourse = () => {
//         const newPlaceInfo: PlaceInfo = {
//             placeName,
//             address,
//             latitude: 0,
//             longitude: 0,
//             button: true,
//         };

//         setCourses((prevCourses) => ({
//             ...prevCourses,
//             [date]: [...(prevCourses[date] || []), newPlaceInfo],
//         }));

//         if (onAddCourse) onAddCourse();
//     };

//     return (
//         <Container address={address}>
//             <div>
//                 <Title>{placeName}</Title>
//                 {address && <Address>{address}</Address>}
//             </div>
//             {address && <Divider />}
//             <ButtonWrapper>
//                 <AddButton onClick={handleAddCourse}>추가하기</AddButton>
//                 <DetailButton>자세히 보기</DetailButton>
//             </ButtonWrapper>
//         </Container>
//     );
// }

// export default CustomOverlayContent;

// // styled-components 정의 추가
// const Container = styled.div<{ address: string }>`
//     font-family: 'Pretendard', sans-serif;
//     font-size: 14px;
//     color: #333;
//     width: 250px;
//     height: ${({ address }) => (address ? '130px' : '100px')};
//     padding: 10px;
//     background-color: #fff;
//     border-radius: 8px;
//     box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 9999;
// `;

// const Title = styled.h2`
//     margin: 5px;
//     font-size: 16px;
//     color: #333;
// `;

// const Address = styled.p`
//     margin: 2px 5px;
//     font-size: 14px;
//     color: #666;
// `;

// const Divider = styled.div`
//     height: 1px;
//     background-color: #e7e7e7;
//     margin: 10px 0;
// `;

// const ButtonWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 10px;
// `;

// const AddButton = styled.button`
//     padding: 10px;
//     background-color: #2958db;
//     color: #fff;
//     border: none;
//     border-radius: 8px;
//     cursor: pointer;
//     flex: 1;
// `;

// const DetailButton = styled.button`
//     padding: 10px;
//     background-color: #fff;
//     color: #2958db;
//     border: 1px solid #2958db;
//     border-radius: 8px;
//     cursor: pointer;
//     flex: 1;
// `;