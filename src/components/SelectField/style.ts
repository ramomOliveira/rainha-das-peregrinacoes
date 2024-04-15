'use client'

import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  width: 100%;

  position: relative;

  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > input {
      padding-top: 8px;
      padding-bottom: 8px;
      border: 0;
      border-radius: 6px;
      margin-top: 4px;
      font-size: 16px;
      width: 100%;

      &:focus {
        outline: none;
        border-radius: 0;
      }

      &::placeholder {
        color: #00000040;
      }
    }

    > button {
      background-color: transparent;
    }
  }
`
