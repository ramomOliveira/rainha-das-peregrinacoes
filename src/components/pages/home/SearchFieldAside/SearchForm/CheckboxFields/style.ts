'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  color: white;
  font-weight: 700;
  gap: 16px;
  margin-bottom: 12px;
  opacity: 1;

  > label {
    opacity: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (min-width: 769px) {
    display: flex;
  }
`
