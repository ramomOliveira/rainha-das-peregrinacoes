'use client'

import styled from 'styled-components'

export const Container = styled.label`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
  }

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

    > div {
      display: flex;
      align-items: center;
      > input {
        padding-top: 8px;
        padding-bottom: 8px;
        border: 0;
        border-radius: 6px;
        margin-top: 4px;
        font-size: 16px;
        width: 100%;

        &::placeholder {
          color: #00000040;
        }

        &:focus {
          outline: none;
          border-radius: 0;
        }
      }
    }

    > button {
      background-color: transparent;
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
  bottom: -155px;
  left: 0;
  width: 100%;

  background-color: white;
  border-radius: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 400;

  > div {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
      font-size: 18px;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      > label {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
`
