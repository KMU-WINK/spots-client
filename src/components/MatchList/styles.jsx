import styled from 'styled-components';
import location from '../../imgs/location.svg';
import filtericon from '../../imgs/filtericon.svg';
import meetingicon from '../../imgs/meetingicon.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 70px 0px 192px;
`;

export const MatchListText = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const MatchListImg = styled.img.attrs({
  src: location,
})`
  width: 24px;
  height: 24px;
  margin-left: 11px;
`;

export const LocationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  margin-bottom: 13px;
`;

export const Locations = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 50px;
  background: #ffffff;
  color: #d3d3d3;

  font-family: 'AppleSDGothicNeoR00';
  font-size: 20px;
  cursor: pointer;
  border-radius: 28px;
  border: 2px solid #d3d3d3;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  height: 37px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const FilterImg = styled.img.attrs({
  src: filtericon,
})`
  width: 39px;
  height: 39px;
`;

export const Filters = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #838383;
  width: 89px;
  height: 37px;

  font-family: 'Apple SD Gothic Neo';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #d9d9d9;
  border-radius: 28px;

  .clicked {
    background: green;
  }
`;

export const FilterDropContainer = styled.select`
  text-align: center;
  background: #ffffff;
  color: #838383;
  width: 89px;
  height: 37px;

  font-family: 'Apple SD Gothic Neo';
  font-weight: 600;
  font-size: 16px;
  line-height: 1px;
  cursor: pointer;
  border: 2px solid #d9d9d9;
  border-radius: 28px;
`;

export const FilterDropObtions = styled.option``;

export const MatchListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 77px;
`;

export const MatchLists = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding-top: 44px;
  padding-left: 47px;
  padding-bottom: 45px;
  cursor: pointer;
`;

export const MatchName = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.05em;
  color: #171717;
  margin-bottom: 12px;
`;

export const MatchDate = styled.div`
  font-family: 'SF Pro';
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.05em;
  color: #171717;
  margin-bottom: 13px;
`;

export const MatchPlace = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -0.05em;
  color: #171717;
  margin-bottom: 36px;
`;

export const MatchStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const MatchIcon = styled.img.attrs({
  src: meetingicon,
})`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

export const MatchNumber = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 30px;
  letter-spacing: -0.05em;
  color: #171717;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 80px;
  justify-content: center;
  margin-bottom: 192px;
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
