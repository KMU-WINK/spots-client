import styled from 'styled-components';
import background from '../../imgs/Rectangle-1887.svg';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Background = styled.div`
  width: 100%;
  height: 507.44px;

  background: url(${background}) no-repeat center;
  //background-size: 1920px;
`;
