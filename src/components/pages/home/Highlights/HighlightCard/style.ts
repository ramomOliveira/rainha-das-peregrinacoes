'use client'

import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('/images/Nazare-Portugal.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 16px;

  > span {
    display: flex;
    justify-content: flex-end;

    > p {
      font-size: 12px;
      font-weight: 700;
      color: white;
      background-color: #ffa800;
      border-radius: 12px;
      padding: 6px 12px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;

    > p {
      font-weight: 700;
    }

    > span {
      font-size: 14px;
    }
  }
`
