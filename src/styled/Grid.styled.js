import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 1.6rem 0 0;
  border: .5px solid var(--${({ theme }) => theme}-grid);
  border-radius: 2px;
  height: fit-content;
`
export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const Cell = styled.div`
  width: 14px;
  height: 14px;
  border: .5px solid var(--${({ theme }) => theme}-grid);
  background-color: ${({ theme, value }) => `var(--${theme}-cell-${value})`};
`