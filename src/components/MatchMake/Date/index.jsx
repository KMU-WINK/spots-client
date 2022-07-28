import React from 'react';
import * as styled from './styles';

const Date = () => {
    return(
        <styled.DateContainer>
            <styled.DateBox>
                <styled.DateText>
                    시간
                </styled.DateText>
                <styled.DateInform>
                    ※ 매칭 지원은 모임 시간 24시간 전에 자동으로 마감됩니다.
                </styled.DateInform>
                <styled.DateTime>
                    <styled.CalendarCheck />
                    <styled.DateTimeText>
                        22년 07월 25일
                    </styled.DateTimeText>
                </styled.DateTime>
                <styled.CalendarBox>
                    <styled.PrevArrowInvalid />
                    <styled.NextArrowValid />
                </styled.CalendarBox>
                <styled.Horizon />
                <styled.TimeBox>
                    <styled.Watch />
                    <styled.TimeText>
                        17 : 00
                    </styled.TimeText>
                </styled.TimeBox>
                <styled.TimeGetBox>
                    <styled.TimeGet>
                        {/* <styled.TimeGet2359 placeholder='17' />
                        <styled.TimeGet2359 placeholder='00' /> */}
                    </styled.TimeGet>
                    <styled.TimeInform>
                            ※ 약속 시간을 입력해주세요.
                    </styled.TimeInform>
                </styled.TimeGetBox>
            
            </styled.DateBox>
        </styled.DateContainer>
        
    )
}

export default Date;