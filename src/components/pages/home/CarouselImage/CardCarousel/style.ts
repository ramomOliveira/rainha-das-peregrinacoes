import styled from 'styled-components'

interface ContainerProps {
  image?: string
  imageSizes?: 'small' | 'medium'
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;

  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => (props.imageSizes === 'small' ? '200px' : '350px')};
  border-radius: 12px;
  
  box-shadow: 0px 4px 4px #00000040;

  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {
    display: flex;
    justify-content: flex-end;

    > p {
      font-size: 12px;
      font-weight: 700;
      color: white;
      background-color: #ffa800;
      border-radius: 12px;
      padding: 6px 12px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;

    > p {
      font-weight: 700;
    }

    > span {
      font-size: 14px;
    }
  }
`
