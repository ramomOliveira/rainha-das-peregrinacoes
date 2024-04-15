'use client'

import styled from 'styled-components'

export const Slider = styled.div`
  z-index: 999;
  position: absolute;
  bottom: -75px;
  left: 0;
  width: 100%;

  background-color: white;
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 8px;

  > div {
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
      display: flex;
      gap: 8px;

      > p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`
