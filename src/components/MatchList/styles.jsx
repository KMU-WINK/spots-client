import styled from 'styled-components';
import location from '../../imgs/location.svg';
import filtericon from '../../imgs/filtericon.svg';
import meetingicon from '../../imgs/meetingicon.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 3vw;
  padding-bottom: 4vw;
  padding-left: 20vw;
`;

export const MatchListText = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.3vw;
  padding: 1.25vw 0vw;
`;

export const MatchListImg = styled.img.attrs({
  src: location,
})`
  position: relative;
  width: 1.25vw;
  height: 1.25vw;
  top: 0.1vw;
`;

export const LocationContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: space-between;
`;

export const Locations = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #d3d3d3;

  font-family: 'AppleSDGothicNeoR00';
  width: 6.3vw;
  height: 2.6vw;
  font-size: 1vw;
  line-height: 1.1vw;
  cursor: pointer;
  border-radius: 1.5vw;
  border: 0.1vw solid #d3d3d3;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.7vw;
`;

export const FilterImg = styled.img.attrs({
  src: filtericon,
})`
  width: 2vw;
  height: 2vw;
`;

export const Filters = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #838383;
  width: 4.6vw;
  height: 1.9vw;

  font-family: 'Apple SD Gothic Neo';
  font-weight: 600;
  font-size: 0.8vw;
  line-height: 1px;
  cursor: pointer;
  border: 0.1vw solid #d9d9d9;
  border-radius: 1.5vw;

  .clicked {
    background: green;
  }
`;

export const FilterDropContainer = styled.select`
  text-align: center;
  background: #ffffff;
  color: #838383;
  width: 4.6vw;
  height: 1.9vw;

  font-family: 'Apple SD Gothic Neo';
  font-weight: 600;
  font-size: 0.8vw;
  line-height: 1px;
  cursor: pointer;
  border: 0.1vw solid #d9d9d9;
  border-radius: 1.5vw;
`;

export const FilterDropObtions = styled.option``;

export const MatchListContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: space-around;
  margin-left: -0.5vw;
  padding-top: 1vw;
  padding-bottom: 0.5vw;
`;

export const MatchLists = styled.div`
  width: 15.6vw;
  height: 15vw;
  background: #ffffff;
  box-shadow: 0vw 0.2vw 1.25vw -0.05vw rgba(0, 0, 0, 0.25);
  border-radius: 0.625vw;
  padding-left: 2.4vw;
  cursor: pointer;
`;

export const MatchName = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.5vw;
  letter-spacing: -0.05em;
  color: #171717;
  padding-top: 2.3vw;
`;

export const MatchDate = styled.div`
  font-family: 'SF Pro';
  font-weight: 700;
  font-size: 1.9vw;
  line-height: 2.2vw;
  letter-spacing: -0.05em;
  color: #171717;
  padding-top: 0.6vw;
`;

export const MatchPlace = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 1.87vw;
  letter-spacing: -0.05em;
  color: #171717;
  padding-top: 0.7vw;
`;

export const MatchStatus = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.82vw;
`;

export const MatchIcon = styled.img.attrs({
  src: meetingicon,
})`
  width: 1.25vw;
  height: 1.25vw;
  padding-right: 0.33vw;
`;

export const MatchNumber = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 1.56vw;
  line-height: 1.9vw;
  letter-spacing: -0.05em;
  color: #171717;
`;

export const Nav = styled.nav`
  display: flex;
  width: 60%;
  gap: 4.1vw;
  padding-top: 4vw;
  justify-content: center;
  padding-bottom: 5vw;
`;

export const Button = styled.button`
  font-family: 'SF Pro';
  font-weight: 400;
  font-size: 1.25vw;
  line-height: 1.5vw;
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
