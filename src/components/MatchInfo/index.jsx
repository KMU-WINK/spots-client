import React, { useState } from 'react';
import * as styled from './styles';




const MatchInfo = () => {
    return (
        <styled.Container>
            <styled.MatchDiv>
                <styled.TextDiv>
                    <styled.MatchName>모임 이름</styled.MatchName>
                    <styled.MatchDate>07.08 / 17:00</styled.MatchDate>
                    <styled.MatchPlace>모임 장소</styled.MatchPlace>
                    <styled.UserIcon />
                    <styled.MatchPeople>인원 (5/5)</styled.MatchPeople>
                    <styled.MatchSuccess>매칭확정</styled.MatchSuccess>
                    {/* <styled.Toggle onClick={onClickGnb}/> */}
                    <styled.Toggle />
                </styled.TextDiv>
            </styled.MatchDiv>

            <styled.MatchDiv>
                <styled.TextDiv>
                    <styled.MatchName>모임 이름</styled.MatchName>
                    <styled.MatchDate>07.08 / 17:00</styled.MatchDate>
                    <styled.MatchPlace>모임 장소</styled.MatchPlace>
                    <styled.UserIcon />
                    <styled.MatchPeople>인원 (5/5)</styled.MatchPeople>
                    <styled.MatchSuccess>매칭확정</styled.MatchSuccess>
                    {/* <styled.Toggle onClick={onClickGnb}/> */}
                    <styled.Toggle />
                </styled.TextDiv>
            </styled.MatchDiv>

            <styled.MatchDiv>
                <styled.TextDiv>
                    <styled.MatchName>모임 이름</styled.MatchName>
                    <styled.MatchDate>07.08 / 17:00</styled.MatchDate>
                    <styled.MatchPlace>모임 장소</styled.MatchPlace>
                    <styled.UserIcon />
                    <styled.MatchPeople>인원 (5/5)</styled.MatchPeople>
                    <styled.MatchSuccess>매칭확정</styled.MatchSuccess>
                    {/* <styled.Toggle onClick={onClickGnb}/> */}
                    <styled.Toggle />
                </styled.TextDiv>
            </styled.MatchDiv>

            <styled.MatchDivOpen>
                <styled.TextDiv>
                    <styled.MatchName>모임 이름</styled.MatchName>
                    <styled.MatchDate>07.08 / 17:00</styled.MatchDate>
                    <styled.MatchPlace>모임 장소</styled.MatchPlace>
                    <styled.UserIcon />
                    <styled.MatchPeople>인원 (5/5)</styled.MatchPeople>
                    <styled.MatchSuccess>매칭확정</styled.MatchSuccess>
                    {/* <styled.Toggle onClick={onClickGnb}/> */}
                    <styled.Toggle />
                </styled.TextDiv>
                <hr width="924.5px" style={{margin: '40px', backgroundColor:'#D3D3D3' }} />
                <styled.InnerDiv1>
                    <styled.InnerDiv1Left>
                        <styled.InnerDiv1LeftText1>매칭 지원자</styled.InnerDiv1LeftText1>
                        <styled.InnerDiv1LeftText2>
                            <styled.InnerDiv1LeftText3>8</styled.InnerDiv1LeftText3>
                            <styled.InnerDiv1LeftText4>명이 지원했어요.</styled.InnerDiv1LeftText4>
                        </styled.InnerDiv1LeftText2>
                        <styled.InnerDivLevel>
                            <styled.InnerDivLevelFull />
                            <styled.InnerDivLevelPink1 />
                        </styled.InnerDivLevel>
                        <styled.InnerDivLevelText>지원자의 평균 레벨 : 중상</styled.InnerDivLevelText>
                        <styled.InnerDivLevel>
                            <styled.InnerDivLevelFull />
                            <styled.InnerDivLevelPink2 />
                        </styled.InnerDivLevel>
                        <styled.InnerDivLevelText>지원자의 평균 연령 : 20대 초반</styled.InnerDivLevelText>
                    </styled.InnerDiv1Left>
                </styled.InnerDiv1>
                <styled.ApplicantList>
                    <styled.InnerToggle>
                        <styled.InnerToggleImg />
                        <styled.InnerToggleText1>지원자이름1</styled.InnerToggleText1>
                        <styled.InnerToggleText2>여</styled.InnerToggleText2>
                        <styled.InnerToggleText3>하</styled.InnerToggleText3>
                        <styled.InnerToggleText4>서초 1동</styled.InnerToggleText4>
                        <styled.InnerToggleBtn />
                    </styled.InnerToggle>
                    <styled.AcceptBtn>
                        <styled.AcceptBtnImg />
                        <styled.AcceptBtnText>승인</styled.AcceptBtnText>
                    </styled.AcceptBtn>
                    <styled.DenyBtn>
                        <styled.DenyBtnImg />
                        <styled.DenyBtnText>거절</styled.DenyBtnText>
                    </styled.DenyBtn>
                </styled.ApplicantList>
                <styled.ApplicantList>
                    <styled.InnerToggle>
                        <styled.InnerToggleImg />
                        <styled.InnerToggleText1>지원자이름1</styled.InnerToggleText1>
                        <styled.InnerToggleText2>여</styled.InnerToggleText2>
                        <styled.InnerToggleText3>하</styled.InnerToggleText3>
                        <styled.InnerToggleText4>서초 1동</styled.InnerToggleText4>
                        <styled.InnerToggleBtn />
                    </styled.InnerToggle>
                    <styled.AcceptBtn>
                        <styled.AcceptBtnImg />
                        <styled.AcceptBtnText>승인</styled.AcceptBtnText>
                    </styled.AcceptBtn>
                    <styled.DenyBtn>
                        <styled.DenyBtnImg />
                        <styled.DenyBtnText>거절</styled.DenyBtnText>
                    </styled.DenyBtn>
                </styled.ApplicantList>
                <styled.ApplicantList>
                    <styled.InnerToggle>
                        <styled.InnerToggleImg />
                        <styled.InnerToggleText1>지원자이름1</styled.InnerToggleText1>
                        <styled.InnerToggleText2>여</styled.InnerToggleText2>
                        <styled.InnerToggleText3>하</styled.InnerToggleText3>
                        <styled.InnerToggleText4>서초 1동</styled.InnerToggleText4>
                        <styled.InnerToggleBtn />
                    </styled.InnerToggle>
                    <styled.AcceptBtn>
                        <styled.AcceptBtnImg />
                        <styled.AcceptBtnText>승인</styled.AcceptBtnText>
                    </styled.AcceptBtn>
                    <styled.DenyBtn>
                        <styled.DenyBtnImg />
                        <styled.DenyBtnText>거절</styled.DenyBtnText>
                    </styled.DenyBtn>
                </styled.ApplicantList>
                <styled.ApplicantList>
                    <styled.InnerToggle>
                        <styled.InnerToggleImg />
                        <styled.InnerToggleText1>지원자이름1</styled.InnerToggleText1>
                        <styled.InnerToggleText2>여</styled.InnerToggleText2>
                        <styled.InnerToggleText3>하</styled.InnerToggleText3>
                        <styled.InnerToggleText4>서초 1동</styled.InnerToggleText4>
                        <styled.InnerToggleBtn />
                    </styled.InnerToggle>
                    <styled.AcceptBtn>
                        <styled.AcceptBtnImg />
                        <styled.AcceptBtnText>승인</styled.AcceptBtnText>
                    </styled.AcceptBtn>
                    <styled.DenyBtn>
                        <styled.DenyBtnImg />
                        <styled.DenyBtnText>거절</styled.DenyBtnText>
                    </styled.DenyBtn>
                </styled.ApplicantList>
                <styled.ApplicantList>
                    <styled.InnerToggle>
                        <styled.InnerToggleImg />
                        <styled.InnerToggleText1>지원자이름1</styled.InnerToggleText1>
                        <styled.InnerToggleText2>여</styled.InnerToggleText2>
                        <styled.InnerToggleText3>하</styled.InnerToggleText3>
                        <styled.InnerToggleText4>서초 1동</styled.InnerToggleText4>
                        <styled.InnerToggleBtn />
                    </styled.InnerToggle>
                    <styled.AcceptBtn>
                        <styled.AcceptBtnImg />
                        <styled.AcceptBtnText>승인</styled.AcceptBtnText>
                    </styled.AcceptBtn>
                    <styled.DenyBtn>
                        <styled.DenyBtnImg />
                        <styled.DenyBtnText>거절</styled.DenyBtnText>
                    </styled.DenyBtn>
                </styled.ApplicantList>
                <styled.MoreApplicantsImg />
            </styled.MatchDivOpen>

            <styled.MatchDiv>
                <styled.TextDiv>
                    <styled.MatchName>모임 이름</styled.MatchName>
                    <styled.MatchDate>07.08 / 17:00</styled.MatchDate>
                    <styled.MatchPlace>모임 장소</styled.MatchPlace>
                    <styled.UserIcon />
                    <styled.MatchPeople>인원 (5/5)</styled.MatchPeople>
                    <styled.MatchSuccess>매칭확정</styled.MatchSuccess>
                    {/* <styled.Toggle onClick={onClickGnb}/> */}
                    <styled.Toggle />
                </styled.TextDiv>
            </styled.MatchDiv>
        </styled.Container>
    );
};

export default MatchInfo;