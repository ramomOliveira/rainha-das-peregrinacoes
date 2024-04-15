'use client'

import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 46px;
  background-color: white;

  border-top-left-radius: 999px;
  padding: 40px 0;
  box-shadow: 0px 3px 6px #00000029;
  color: #015287;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;

    > img {
      width: 200px;
      height: auto;
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 700;
`
