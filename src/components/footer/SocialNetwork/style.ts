'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  > p {
    font-size: 12px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #015287;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: white;
    padding: 4px;
  }
`

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 12px;
    text-transform: uppercase;
  }

  > img {
    width: 147px;
    height: auto;
  }
`
