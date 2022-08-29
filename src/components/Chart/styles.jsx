import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: ${props => (props?.size && props.size) || '360px'};
  margin: 0;
  filter: drop-shadow(0 4px 10px rgb(0, 0, 0, 0.25));
`;
