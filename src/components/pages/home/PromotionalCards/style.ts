'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (min-width: 1046px) {
    gap: 80px;
  }
`
