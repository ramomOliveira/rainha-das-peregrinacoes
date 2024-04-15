'use client'

import styled from 'styled-components'

export const OptionsPopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 999;
  position: absolute;
  bottom: -85px;
  left: 0;
  width: 100%;

  background-color: white;
  border-radius: 6px;
  padding-top: 4px;
  padding-bottom: 4px;

  > label {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    text-align: start;
    width: 100%;
    padding: 8px;
  }
`
