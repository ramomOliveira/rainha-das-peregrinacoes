'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 16px;
  gap: 12px;

  > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (min-width: 769px) {
    grid-template-columns: 70% 1fr;

    > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
