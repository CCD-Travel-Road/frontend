import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
    // const navigate = useNavigate();

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
                    monthHeight: 400, // 각 달의 높이 설정
                    longMonthHeight: 400, // 긴 달의 높이 설정 (일수 차이로 인해)
                    calendarWidth: 800, // 달력 전체의 너비 설정
                    calendarHeight: 600, // 달력 전체의 높이 설정
                }}
                locale={ko}
                color={colors.mainColor}
            />
            {isButtonVisible && (  
                
                <ButtonFrame onClick={handleNextButtonClick }>
                    <NextButton>다음으로</NextButton>
                </ButtonFrame>
                
            )}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </CalendarWrapper>
    );
}

export default ScrollableCalendar;

const CalendarWrapper = styled.div`
    width: 100%;
    height: 100%;
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
    color: ${colors.mainColor};

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
        background-color:#f9f9f9;
    }
    
    .rdrDateDisplayWrapper {
        background-color:#f9f9f9;
    }

    /* 일별 스타일링 */
    .rdrDays {
        justify-content:space-between;
    }
    
    .rdrDay {
        margin: 4px 0px;
        width:calc(100% / 7);
        height:51px; 
    }

    /* 일자 Acitve 스타일링 */
    .rdrStartEdge { 
        border-radius:150px 0px 0px 150px;
    }
    .rdrEndEdge { 
        border-radius:0px 150px 150px 0px;
    }
    
    
    .rdrDayNumber {
        position:static;
        width:100%;
        height:100%;
    }

    .rdrDayNumber span {
        z-index:99;
    }

    .rdrDay--inRange,
    .rdrDay--selected,
    .rdrInRange,
    .rdrStartEdge,
    .rdrEndEdge {
        background-color: ${colors.mainColor} !important;
        color: white !important;

        top:0px;
        bottom:0px;
        right:0px;
        left:0px;
    }

    .rdrDay--endOfMonth {
        margin: 5px 0; 
    }

`;

const ButtonFrame = styled.button`
    position: fixed;
    width: calc(100% - 40px);
    bottom: 16%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.mainColor};
    
    border: none;
    border-radius: 8px;
    cursor: pointer;

    font-weight:400;
    color: white;
    font-size: 14px;
    padding:12px 0px;

    z-index: 10;
`;

const NextButton = styled.div`
    width:100%;
`
