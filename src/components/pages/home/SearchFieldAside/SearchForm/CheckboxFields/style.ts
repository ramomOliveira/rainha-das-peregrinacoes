'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  color: white;
  font-weight: 700;
  gap: 16px;
  margin-bottom: 12px;
  opacity: 1;

  > label {
    opacity: 1;
    display: flex;
    align-items: center;
    gap: 8px;

    > input {
      opacity: 0;
      position: absolute;
    }
    > span {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1px;
      > svg {
        display: none;
      }
    }
    > input:checked + span {
      background-color: white;
      color: #015287;
      > svg {
        display: block;
      }
    }
  }

  @media (min-width: 769px) {
    display: flex;
  }
`
