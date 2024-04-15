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
export const DesktopMenu = styled.nav`
  display: none;

  > ul {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 100px;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`
export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 999;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  padding: 16px 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

    > button {
      position: absolute;
      left: 20px;
      background-color: transparent;
      font-size: 32px;
      color: #015287;
    }
  }

  > ul {
    margin-top: 48px;
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0 20px;

    > button {
      margin-top: 24px;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`
