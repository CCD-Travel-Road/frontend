import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';
import { dateRangeState } from '../recoil/atoms'
import { colors } from '../styles/GlobalStyles';
import Modal from './Modal';

function ScrollableCalendar() {
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [, setDateRange] = useRecoilState(dateRangeState);


    const handleSelect = (ranges) => {
        const { selection } = ranges;
        setSelectionRange(selection);

        // 포맷팅하여 콘솔에 출력
        const startDate = format(selection.startDate, 'yyyy-MM-dd');
        const endDate = format(selection.endDate, 'yyyy-MM-dd');
        console.log(`StartDate: ${startDate}, EndDate: ${endDate}`);
        setIsButtonVisible(true);
    };

    const handleNextButtonClick = () => {
        setDateRange({
            startDate: selectionRange.startDate,
            endDate: selectionRange.endDate,
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <CalendarWrapper>
            <StyledDateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                months={2}
                direction='vertical'
                showSelectionPreview={false}
                showMonthAndYearPickers={false}
                staticRanges={[]}
                inputRanges={[]}
                renderStaticRangeLabel={() => ''} // 사용자 정의 레이블 렌더링
                scroll={{
                    enabled: true, // 무한 스크롤 활성화
                    monthHeight: 300, // 각 달의 높이 설정
                    longMonthHeight: 350, // 긴 달의 높이 설정 (일수 차이로 인해)
                    calendarWidth: 800, // 달력 전체의 너비 설정
                    calendarHeight: 600, // 달력 전체의 높이 설정
                }}
                locale={ko}
            />
            {isButtonVisible && (
                <NextButton onClick={handleNextButtonClick}>다음으로</NextButton>
            )}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </CalendarWrapper>
    );
}

export default ScrollableCalendar;

const CalendarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;

    .rdrDefinedRangesWrapper {
        display: none;
    }
`;

const StyledDateRangePicker = styled(DateRangePicker)`
    width: 100%;
    height: auto;

    /* 내부 클래스 스타일링 */
    .rdrCalendarWrapper, .rdrDateRangeWrapper, .rdrMonth {
        width: 100%;
        height: auto; 
    }

    .rdrCalendarWrapper {
        display: flex; /* 수직 스크롤을 가능하게 설정 */
        flex-direction: column; /* 세로로 달력을 나열 */
    }

    .rdrDateRangeWrapper {
        width: 100%;
        height: auto; /* 필요에 따라 설정 */
    }
    
    .rdrDay {
        margin: 5px 0; 
    }

    .rdrDay--inRange, .rdrDay--selected {
        margin: 5px 0; 
    }

    .rdrDay--endOfMonth {
        margin: 5px 0; 
    }
`;

const NextButton = styled.button`
    position: fixed;
    width: 80%;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: ${colors.mainColor};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    z-index: 10;
`;