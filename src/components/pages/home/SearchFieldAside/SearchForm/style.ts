'use client'

import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  max-width: 1046px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 769px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  > div {
    background-color: rgba(1, 82, 135, 0.8);
    margin-top: -180px;
    padding: 16px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    gap: 12px;
    width: 100%;

    box-shadow: 0px 4px 4px #00000040;

    @media (min-width: 769px) {
      margin-top: -164px;
      padding: 24px 100px;
    }

    > div {
      margin-left: 20px;
      margin-right: 20px;

      > h1 {
        color: white;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 16px;

        @media (min-width: 769px) {
          font-size: 32px;
        }
      }
      width: 100%;

      > button {
        display: none;
        @media (min-width: 769px) {
          display: flex;
          margin-top: 16px;
        }
      }
    }
  }
`
