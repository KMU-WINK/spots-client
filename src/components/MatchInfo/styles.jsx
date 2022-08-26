import styled from 'styled-components';
import usericon from '../../imgs/icon-user-two-mono.svg';
import togglebutton from '../../imgs/toggleBtn.svg';
import levelpink1 from '../../imgs/level-pink.svg';
import levelpink2 from '../../imgs/level-pink2.svg';
import levelfull from '../../imgs/level-full.svg';
import innertoggle from '../../imgs/innertoggle.svg';
import acceptbtn from '../../imgs/acceptbtn.svg';
import denybtn from '../../imgs/denybtn.svg';
import moreapplicants from '../../imgs/more-applicants.svg';

export const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-left: 250px;
    margin-bottom: 300px;
`;

export const MatchDiv = styled.div`
    width: 990px;
    height: 70px;
    background: #ffffff;
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: inline-block;
    margin-top: 20px;
    // vertical-align: center;
`;

export const TextDiv = styled.div`
    // width: 738px;
    height: 27.28px;
    // vertical-align: center;
    display: flex;
    // margin-top: 23px;
    margin-left: 42px;
    // padding-bottom: 30px;
`;

export const MatchName = styled.div`
    font-family: 'Apple SD Gothic Neo';
    font-weight: 700;
    font-size: 20px;
    margin-top: 23px;
`;



export const MatchDate = styled.div`
    font-family: 'Apple SD Gothic Neo';
    font-weight: 700;
    font-size: 20px;
    margin-left: 165px;
    margin-top: 23px;
`;

export const MatchPlace = styled.div`
    font-family: 'Apple SD Gothic Neo';
    font-weight: 400;
    font-size: 18px;
    margin-left: 116px;
    margin-top: 26.44px;
`;

export const UserIcon = styled.img.attrs({
    src: usericon,
})`
    width: 24px;
    height: 27.54px;
    margin-left: 110px;
    margin-top: 23.24px;
`;

export const MatchPeople = styled.div`
    font-family: 'Apple SD Gothic Neo';
    font-weight: 400;
    font-size: 16px;
    margin-left: 7px;
    margin-top: 28.44px;
`;

export const MatchSuccess = styled.div`
    // font-family: 'SF Pro';
    // font-style: normal;
    // font-weight: 510;
    // font-size: 14px;
    // line-height: 17px;
    font-family: 'Apple SD Gothic Neo';
    font-weight: 700;
    font-size: 14px;
    margin-left: 56px;
    margin-top: 27px;
    color: #FB1E53;
`;

export const Toggle = styled.img.attrs({
    src: togglebutton,
})`
    width: 12.12px;
    height: 20px;
    margin-top: 25px;
    margin-left: 40px;  
`;

export const MatchDivOpen = styled.div`
    width: 990px;
    height: 1072px;
    background: #ffffff;
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: inline-block;
    margin-top: 20px;
    // vertical-align: center;
`;

export const InnerDiv1 = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 59px;
`;

export const InnerDiv1Left = styled.div`
    width: 55%;
    display: block;
`;

export const InnerDiv1LeftText1 = styled.div`
    margin-left: 46px;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: left;

`;

export const InnerDiv1LeftText2 = styled.div`
    display: flex;
`;

export const InnerDiv1LeftText3 = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 128px;
    line-height: 153px;
    /* identical to box height */
    letter-spacing: -0.02em;
    color: #FB1E53;
    margin-left: 45px;
`;

export const InnerDiv1LeftText4 = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    letter-spacing: -0.02em;
    color: #FB1E53;
    padding-top: 100px;
    padding-left: 5px;
`;

export const InnerDivLevel = styled.div`
    width: 453px;
    height: 45px;
    margin-top: 17px;
    position: relative;
`;

export const InnerDivLevelFull = styled.img.attrs({
    src: levelfull,
})`
    width: 453px;
    height: 45px;
    position: absolute;
    margin-left: 57px;
`;

export const InnerDivLevelPink1 = styled.img.attrs({
    src: levelpink1,
})`
    width: 302px;
    height: 45px;
    position: absolute;
    margin-left: 57px;
`;

export const InnerDivLevelPink2 = styled.img.attrs({
    src: levelpink2,
})`
    width: 117px;
    height: 45px;
    position: absolute;
    margin-left: 57px;
`;


export const InnerDivLevelText = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    letter-spacing: -0.02em;
    color: #333333;
    margin-top: 7px;
    margin-left: 63px;
`;

export const ApplicantList = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
`;

export const InnerToggle = styled.div`
    width: 740px;
    height: 61px;
    margin-left: 46px;
    display: inline-block;
    position: relative;
`;

export const InnerToggleImg = styled.img.attrs({
    src: innertoggle,
})`
    width: 740px;
    height: 61px;
`;

export const InnerToggleText1 = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171717;
    position: absolute;
    top: 21px;
    left: 26px;
`;

export const InnerToggleText2 = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171717;
    position: absolute;
    top: 21px;
    left: 185px;
`;

export const InnerToggleText3 = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171717;
    position: absolute;
    top: 21px;
    left: 289px;
`;

export const InnerToggleText4 = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171717;
    position: absolute;
    top: 21px;
    left: 373px;
`;

export const InnerToggleBtn = styled.img.attrs({
    src: togglebutton,
})`
    width: 12.12px;
    height: 20px;
    position: absolute;
    top: 22px;
    left: 695px;
`;

export const AcceptBtn = styled.div`
    width: 72px;
    height: 61px;
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: middle;
    margin-left: 26px;
`;

export const AcceptBtnImg = styled.img.attrs({
    src: acceptbtn,
})`
    width: 72px;
    height: 61px;
    
`;

export const AcceptBtnText = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    letter-spacing: -0.05em;
    color: #FFFFFF;
    text-align: center;
    position: absolute;
    top: 21px;
    left: 22px;
`;


export const DenyBtn = styled.div`
    width: 72px;
    height: 61px;
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: middle;
    margin-left: 14px;
`;

export const DenyBtnImg = styled.img.attrs({
    src: denybtn,
})`
    width: 72px;
    height: 61px;
    
`;

export const DenyBtnText = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    letter-spacing: -0.05em;
    color: #FFFFFF;
    text-align: center;
    position: absolute;
    top: 21px;
    left: 23px;
`;


export const MoreApplicantsImg = styled.img.attrs({
    src: moreapplicants,
})`
    width: 892px;
    height: 74px;
    margin-left: 49px;
    margin-top: 15px; 
`;
