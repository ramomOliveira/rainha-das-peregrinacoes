'use client'

import styled from 'styled-components'

export const Container = styled.header`
  background-color: white;
  > header {
    display: flex;
    align-items: center;
    padding: 8px 0;
    justify-content: space-between;
  }
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 100px;
  }
`
