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

  position: relative;

  &:hover {
    cursor: pointer;
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div {
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

      &:focus {
        outline: none;
        border-radius: 0;
      }
    }
  }
`

export const OptionsPopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 999;
  position: absolute;
  bottom: -120px;
  left: 0;
  width: 100%;

  background-color: white;
  border-radius: 6px;
  padding-top: 4px;
  padding-bottom: 4px;

  > div {
    font-size: 16px;
    cursor: pointer;
    text-align: start;
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #00000040;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`
