'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`
