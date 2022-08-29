import styled from 'styled-components';
import meetingicon from '../../imgs/meetingicon.svg';
import downicon from '../../imgs/downicon.svg';
import upicon from '../../imgs/upicon.svg';
import hostinfo from '../../imgs/hostinfo.svg';
import hostgrade from '../../imgs/hostgrade.svg';
import icon_basketball from '../../imgs/icon_basketball.svg';
import icon_rugby from '../../imgs/icon_rugby.svg';
import icon_soccer from '../../imgs/icon_soccer.svg';
import icon_tennis from '../../imgs/icon_tennis.svg';
import hostbadge from '../../imgs/hostbadge.svg';
import { RadialChart } from 'react-vis';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 100px;
`;

export const MatchingBox = styled.div`
  display: flex;
  width: 990px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  margin-bottom: 20px;
`;

export const CancelMatchingBox = styled.div`
  display: flex;
  width: 990px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const MatchingName = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.05em;
  color: #171717;
  padding: 23px 0px 0px 42px;
  opacity: ${props => props.opacity || '1px'};
`;

export const MatchingDate = styled.div`
  font-family: 'SF Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.05em;
  color: #171717;
  padding: 23px 0px 0px 165px;
  opacity: ${props => props.opacity || '1px'};
`;

export const MatchingPlace = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: #171717;
  padding: 26.4px 0px 0px 116px;
  opacity: ${props => props.opacity || '1px'};
`;

export const MatchIcon = styled.img.attrs({
  src: meetingicon,
})`
  width: 24px;
  height: 27.5px;
  margin: 22px 0px 0px 110px;
  opacity: ${props => props.opacity || '1px'};
`;

export const MatchingNumber = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.05em;
  color: #171717;
  padding: 26.4px 0px 0px 7px;
  opacity: ${props => props.opacity || '1px'};
`;

export const MatchingStatus = styled.div`
  font-family: 'SF Pro';
  font-style: normal;
  font-weight: 510;
  font-size: 14px;
  line-height: 17px;
  color: #fb1e53;
  padding: 27px 0px 0px 56px;
  opacity: ${props => props.opacity || '1px'};
`;

export const DownIcon = styled.img.attrs({
  src: downicon,
})`
  width: 20px;
  height: 20px;
  margin: 25px 0px 0px 50px;
  opacity: ${props => props.opacity || '1px'};
  cursor: ${props => props.disable || 'pointer'};
`;

export const UpIcon = styled.img.attrs({
  src: upicon,
})`
  width: 20px;
  height: 20px;
  margin: 25px 0px 0px 50px;
  opacity: ${props => props.opacity || '1px'};
  cursor: pointer;
`;

export const ClickedMatchingBox = styled.div`
  width: 990px;
  height: 1250px;
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const ClickedBox = styled.div`
  display: flex;
`;

export const ClickedLine = styled.div`
  width: 924.5px;
  border: 1px solid #d3d3d3;
  margin-left: 29px;
  margin-top: 18.79px;
`;

export const ClickedCondition = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #171717;
  padding: 23px 25.7px 0px 42px;
`;

export const ClickedConditionBtn = styled.div`
  width: 91.25px;
  height: 37.13px;
  background: #ffffff;
  border: 0.919227px solid #fb1e53;
  border-radius: 25.7384px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 18.3845px;
  line-height: 37.13px;
  color: #fb1e53;
  text-align: center;
  margin: 16px 0px 0px 16.3px;
`;

export const ClickedHostBox = styled.div`
  display: flex;
  padding-top: 40px;
  padding-left: 42px;
`;

export const ClickedHost = styled.div`
  font-family: 'Pretendard';
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #333333;
  padding-right: 24px;
`;

export const HostInfo = styled.img.attrs({
  src: hostinfo,
})`
  width: 24px;
  height: 24px;
`;

export const ClickedHostInfo = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #333333;
  padding-left: 6px;
`;

export const HostGrade = styled.img.attrs({
  src: hostgrade,
})`
  width: 24px;
  height: 24px;
`;

export const ClickedHostResponse = styled.div`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #333333;
  padding-right: 24px;
`;

export const ClickedHostInfoText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #333333;
  line-height: 153.34%;
  padding: 8px 0px 0px 42px;
`;

export const BasketballIcon = styled.img.attrs({
  src: icon_basketball,
})`
  width: 48.11px;
  height: 48.11;
  padding: 8px 0px 0px 42px;
`;

export const RugbyIcon = styled.img.attrs({
  src: icon_rugby,
})`
  width: 48.11;
  height: 48.11;
  padding: 8px 0px 0px 42px;
`;

export const SoccerIcon = styled.img.attrs({
  src: icon_soccer,
})`
  width: 48.11;
  height: 48.11;
  padding: 8px 0px 0px 42px;
`;

export const TennisIcon = styled.img.attrs({
  src: icon_tennis,
})`
  width: 48.11;
  height: 48.11;
  padding: 8px 0px 0px 42px;
`;

export const HostBadge = styled.img.attrs({
  src: hostbadge,
})`
  width: 481.06px;
  height: 76.17px;
  padding: 8px 0px 0px 42px;
`;

export const ContactHost = styled.button`
  width: 196.43px;
  height: 46.59px;
  background: #fb1e53;
  border-radius: 9.29644px;
  border: none;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 18.5929px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin: 38px 0px 0px 228.5px;
  cursor: pointer;
`;

export const ClikedApplied = styled.div`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #333333;
`;

export const ClickedRadialChart = styled.div`
  position: relative;
  padding-left: 60px;
`;

export const AppliedMenu = styled.div`
  display: flex;
  width: 481.06px;
  height: 60px;
  border: 0.978355px solid #fb1e53;
  border-radius: 11.7403px;
  margin: 0px 0px 19px 100px;
`;

export const AppliedMenuName = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 15.6537px;
  color: #171717;
  padding-left: 25px;
  line-height: 60px;
`;

export const AppliedMenuInfo = styled.div`
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 15.6537px;
  letter-spacing: -0.05em;
  color: #171717;
  padding-left: 80px;
  line-height: 60px;
`;

export const GenderRatio = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #333333;
  padding: 27.34px 0px 0px 95.46px;
`;

export const GenderText = styled.div`
  position: absolute;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  /* color: #ffffff; */
  color: black;
  padding: 100px 0px 0px 30px;
`;

export const GenderTextRatio = styled.div`
  position: absolute;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* color: #ffffff; */
  color: black;
`;

export const Chart = styled(RadialChart)`
  .rv-xy-plot__series--label {
    fill: #ffffff;
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 80px;
  justify-content: center;
  padding-top: 60px;
`;

export const Button = styled.button`
  font-family: 'SF Pro';
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  background: white;
  border: white;
  color: #171717;
  opacity: 0.5;

  &[aria-current] {
    font-family: 'SF Pro';
    font-style: italic;
    font-weight: 858;
    text-decoration-line: underline;
    cursor: pointer;
    color: #fb1e53;
    opacity: 1;
  }
`;
