import styled, { css } from 'styled-components'

export const flexCenter = css`
  align-items: center;
  justify-content: center;
  display: flex;
`
export const AppWrapper = styled.div`
  background-color: var(--${({ theme }) => theme}-bg);
  color: var(--${({ theme }) => theme}-text);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem;
  font-family: Copperplate, “Copperplate Gothic Light”, fantasy, serif;
  overflow: hidden;
` 
export const Flex = styled.div`
    display: flex;
    justify-content: center;
`

export const FlexCenter = styled.div`
    ${flexCenter}
`

export const Title = styled.h1`
    width: fit-content;
    transform: translate3d(-20%,0,0);
    margin: 1rem 0 .6rem;
    font-weight: 300;
`