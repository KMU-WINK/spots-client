import styled from 'styled-components';
import camera from '../../imgs/icon-camera-mono.svg';

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MyPageContainer = styled.div`
  margin-top: 70px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const ProfileBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const Profile = styled.div`
  position: relative;
  width: 174px;
  height: 161px;
  border-radius: 15px;
  background-color: #d9d9d9;
`;

export const Upload = styled.img.attrs({ src: camera })`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 106px;
  left: 117px;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  margin: 31px 0px 0px 0px;
  display: flex;
  flex-direction: column;

  div {
    margin-top: 27px;
  }
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
export const UserMail = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const Menu = styled.div`
  width: 170px;
  border: 0;
  outline: 0;
  background: white;
  cursor: pointer;
  font-weight: ${props => (props?.active ? '700' : '500')};
  font-size: ${props => (props?.active ? '30px' : '24px')};
  color: ${props => (props?.active ? '#FB1E53' : '#333333')}; ;
`;

export const MenuList = styled.div`
  ${Menu}:not(:last-of-type) {
    margin: 0px 0px 32px 0px;
  }
`;

export const MenuContents = styled.div`
  width: 990px;
  padding-bottom: 50px;
`;

export const MenuBox = styled.div`
  display: flex;
  //justify-content: space-between;
  //justify-content: flex-end;
  gap: 30px;
`;
