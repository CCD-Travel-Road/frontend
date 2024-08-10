import { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { dateRangeState } from '../../recoil/atoms';
import { colors } from '../../styles/GlobalStyles';

function DateContainer() {
    const { startDate, endDate } = useRecoilValue(dateRangeState);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        if (startDate) {
            setSelectedDate(new Date(startDate)); // 처음에 첫째 날을 선택된 날짜로 설정
        }
    }, [startDate]);

    const getDayLabel = (date: Date, start: Date) => {
        const diffInDays = Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        return `Day ${diffInDays}`;
    };

    const generateDateOptions = () => {
        if (!startDate || !endDate) return [];
        const start = new Date(startDate);
        const end = new Date(endDate);
        const dates = [];

        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
            dates.push(new Date(d));
        }

        return dates;
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setIsDropdownOpen(false);
    };

    const startDateFormatted = startDate ? format(new Date(startDate), 'yyyy년 MM월 dd일', { locale: ko }) : '';
    const endDateFormatted = endDate ? format(new Date(endDate), 'yyyy년 MM월 dd일', { locale: ko }) : '';

    const selectedDay = selectedDate ? getDayLabel(selectedDate, new Date(startDate)) : '';

    return (
        <Container>
            <DateRange>
                {startDateFormatted} ~ {endDateFormatted}
            </DateRange>
            <SelectedDate>
                {selectedDate && (
                    <>
                        <DateText>{`${selectedDate.toLocaleDateString('ko-KR')}`}</DateText>
                        <DayInfo>{`(${selectedDay})`}</DayInfo>
                    </>
                )}
            </SelectedDate>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <FaAngleDown />
            </DropdownButton>
            {isDropdownOpen && (
                <DropdownMenu>
                    {generateDateOptions().map((date) => (
                        <DateOption key={date.toString()} onClick={() => handleDateSelect(date)}>
                            {date.toLocaleDateString('ko-KR')} ({getDayLabel(date, new Date(startDate))})
                        </DateOption>
                    ))}
                </DropdownMenu>
            )}
        </Container>
    );
}

export default DateContainer;

// styled-components
const Container = styled.div`
    padding: 16px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative; /* 드롭다운 버튼을 오른쪽 하단에 위치시키기 위해 필요 */
`;

const DateRange = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
`;

const SelectedDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
`;

const DateText = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #333;
    margin: 0;
`;

const DayInfo = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: ${colors.mainColor};
    font-weight: 600; /* SemiBold */
    margin: 0;
`;

const DropdownButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: ${colors.mainColor};
    position: absolute; /* 드롭다운 버튼을 오른쪽 하단에 위치시키기 위해 필요 */
    right: 16px;
    bottom: 16px;
`;

const DropdownMenu = styled.div`
    border: 1px solid #ddd;
    background: white;
    width: 100%;
    max-height: 200px; /* 드롭다운 메뉴의 최대 높이 */
    overflow-y: auto; /* 스크롤 가능 */
    position: fixed; /* 드롭다운 메뉴를 버튼 아래에 위치시키기 위해 필요 */
`;

const DateOption = styled.div`
    padding: 8px;
    cursor: pointer;
    &:hover {
        background: #f0f0f0;
    }
`;
