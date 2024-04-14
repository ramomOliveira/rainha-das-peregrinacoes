'use client'

import styled from 'styled-components'

export const Container = styled.aside`
  background-color: rgba(1, 82, 135, 0.8);
  margin-top: -164px;
  padding: 24px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  gap: 12px;

  > div {
    > h1 {
      color: white;
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 16px;
    }
    width: 100%;

    > button {
      margin-top: 16px;
    }
  }
`
