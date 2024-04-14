'use client'

import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
  font-weight: 700;

  > input {
    padding-top: 8px;
    padding-bottom: 8px;
    border: 0;
    border-radius: 6px;
    margin-top: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-radius: 0;
    }
  }
`
