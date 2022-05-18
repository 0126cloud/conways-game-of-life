import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 13px;

  button {
    background-color: rgba(239,239,239,1);
    border: 1px solid var(--popup-text);
    border-radius: 2px;
    padding: 2px;
    cursor: pointer;

    &:focus {
      outline: 1px solid var(--popup-text);
    }

  }
`

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  label {
    padding-right: 6px;
    min-width: 64px;
    text-align: right;
    &::after {
      content: ':';
    }
  }

  input, select {
    outline: none;
    border: 1px solid var(--popup-text);
    border-radius: 2px;
    padding: 2px 0;
    width: 80px;
    background-color: white;

    &:focus {
      outline: 1px solid var(--popup-text);
    }

    &[type='number'] {
      padding: 2px 3px;
    }
  }
`