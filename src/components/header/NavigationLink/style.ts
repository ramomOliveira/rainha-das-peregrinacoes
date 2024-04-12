'use client'

import styled from 'styled-components'

export const Container = styled.li`
  > a {
    color: ${props => props.theme.colors?.primary};
    font-weight: 700;
  }
`
