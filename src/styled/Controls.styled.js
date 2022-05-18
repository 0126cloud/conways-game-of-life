import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: ${({ active }) => active ? 'var(--btn-active)' : 'var(--primary-color)'} ;
  border: none;
  border-radius: 3px;
  padding: .4rem 1rem;
  cursor: pointer;
  outline: none;

  &:focus {
    transform: scale(0.92);
  }
  
  &:not(:last-child) {
    margin-bottom: .8rem;
  }
`