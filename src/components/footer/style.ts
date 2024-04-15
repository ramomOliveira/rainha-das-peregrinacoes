'use client'

import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 46px;
  background-color: white;
  padding: 40px 0;
  color: #015287;

  > div {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    gap: 24px;

    > img {
      width: 200px;
      height: auto;
      margin-bottom: 32px;
    }
  }

  @media (min-width: 769px) {
    > div {
      grid-template-columns: repeat(4, 1fr);
      justify-items: start;
      > img {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 1046px) {
    box-shadow: 0px 3px 6px #00000029;
    border-top-left-radius: 999px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-weight: 700;

  @media (min-width: 769px) {
    align-items: start;
  }
`
