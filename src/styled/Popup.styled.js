import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  button {
    width: 100%;
  }
`
export const PopupWrapper = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  left: 50%;
  transform: translate3d(-50%,0,0);
  min-width: calc(100% + 24px);
  min-height: 100px;
  background-color: var(--popup-bg);
  border-radius: 2px;
  box-shadow: 0 0 8px 0px var(--${({theme}) => theme}-popup-shadow);
  padding: 12px;
  display: ${({ active }) => active ? 'block' : 'none'};
  color: var(--popup-text);

  &::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%,-100%,0);
    content: '';
    border: 7px solid transparent;
    border-bottom-color: var(--popup-bg);
  }
`