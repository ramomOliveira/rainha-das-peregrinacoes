'use client'

import styled from 'styled-components'

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
    font-weight: 400;
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
