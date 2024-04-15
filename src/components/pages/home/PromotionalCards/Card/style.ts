'use client'

import styled from 'styled-components'

interface ContainerProps {
  headerBackgroundColor: 'blue' | 'green' | 'red'
}

const headerBackgroundColor = {
  blue: '#0a54ff',
  green: '#029820',
  red: '#F24147',
}

const getHeaderBackgroundColor = (color: string) => {
  if (!color) return headerBackgroundColor.blue

  if (color === 'blue') {
    return headerBackgroundColor.blue
  }
  if (color === 'green') {
    return headerBackgroundColor.green
  }
  if (color === 'red') {
    return headerBackgroundColor.red
  }
}

export const Container = styled.div<ContainerProps>`
  > header {
    border-radius: 12px 12px 0 0;
    font-size: 20px;
    color: white;
    font-weight: 700;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props =>
      getHeaderBackgroundColor(props.headerBackgroundColor)};
  }

  > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    border-radius: 0 0 12px 12px;
  }
`
