import styled from 'styled-components';

export const VisuallyHidden = styled.div.attrs(props => ({
  as: props.as || 'div',
}))`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
