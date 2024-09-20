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
            setSelectedDate(new Date(startDate));
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
                        <DayInfo>{format(new Date(selectedDate), 'yyyy년 MM월 dd일', { locale: ko })}</DayInfo>
                        <DayText>{`${selectedDay}`}</DayText>
                    </>
                )}
            </SelectedDate>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <FaAngleDown />
            </DropdownButton>
            {isDropdownOpen && (
                <DropdownMenu>
                    {generateDateOptions().map((date, index) => (
                        <>
                            <DateOption key={date.toString()} onClick={() => handleDateSelect(date)}>
                                {format(new Date(date), 'yyyy년 MM월 dd일', { locale: ko })}
                            </DateOption>
                            {index < generateDateOptions().length - 1 && <Divider />}
                        </>
                    ))}
                </DropdownMenu>
            )}
        </Container>
    );
}

export default DateContainer;

// styled-components
const Container = styled.div`
    padding: 16px 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative; /* 드롭다운 버튼을 오른쪽 하단에 위치시키기 위해 필요 */
`;

const DateRange = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
`;

const SelectedDate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const DayText = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 10px;
    color: #fff;
    background-color: ${colors.mainColor};
    border-radius: 20px;
    padding: 4px 8px; /* 내부 글씨 크기에 맞는 패딩 */
    margin: 0;
`;

const DayInfo = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 20px;
    color: ${colors.mainColor};
    font-weight: 600;
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
    background: white;
    width: 100%;
    height: auto;
    max-height: 120px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    left: 0;

    box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.04);
    border-radius: 0px 0px 8px 8px;
`;

const DateOption = styled.div`
    padding: 16px;
    font-weight: 500;
    font-size: 14px;
    
    cursor: pointer;
    &:hover {
        background: #f0f0f0;
    }
`;

const Divider = styled.div`
    height: 1px;
    width:calc(100% - 40px);
    margin:0 auto;
    background-color: #e7e7e7;
`;