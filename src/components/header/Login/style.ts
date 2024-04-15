import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  > svg {
    transform: rotate(45deg);
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors?.primary};
    margin-right: 40px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33px;
      height: 33px;
      border-radius: 50%;
      border: 2px solid ${props => props.theme.colors?.secondary};

      > svg {
        color: ${props => props.theme.colors?.secondary};
        width: 23px;
        height: 23px;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      p {
        font-weight: 700;
        color: ${props => props.theme.colors?.primary};
      }
      span {
        font-size: 8px;
        color: ${props => props.theme.colors?.primary};
      }
    }
  }
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`
