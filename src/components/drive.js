// core
import React from 'react'
import styled from 'styled-components'
import { variables, typography } from '../theme'
import { spacer } from '../theme/variables'

// styles
const Wrapper = styled.div`
  background-color: ${variables.dark};
  padding: ${spacer * 2}rem 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75vw;
  margin: ${variables.spacer * 12}rem auto;

  @media ${variables.md} {
    margin: ${variables.spacer * 16}rem auto;
    max-width: 60vw;
  }

  @media ${variables.lg} {
    font-size: ${typography.f2};
    margin: ${variables.spacer * 16}rem auto;
  }
`

const Paragraph = styled.p`
  text-align: center;
  color: ${variables.white};
  font-size: ${typography.f4};
  font-family: ${typography.fontLight};
  line-height: 1.5;
  margin-bottom: ${spacer * 4}rem;

  @media ${variables.md} {
    font-size: ${typography.f4};
    margin-left: ${variables.spacer * 8}rem;
    margin-right: ${variables.spacer * 8}rem;
  }

  @media ${variables.lg} {
    font-size: ${typography.f3};
    line-height: 1.25;
  }
`

const Button = styled.a`
  padding: ${spacer * 2}rem ${spacer * 3}rem;
  background-color: ${variables.light};
  color: ${variables.dark};
  border-radius: 4px;
  border: none;
  font-size: ${typography.f5};
  cursor: pointer;
  transition: 0.2s ease-out;
  text-decoration: none;

  &:hover {
    background-color: ${variables.lighter};
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  }
`



// render
const Drive = () => {
  return (
    <Wrapper>
      <Container>
        <Paragraph>
          View the entire collection and download high resolution versions of the photographs.
        </Paragraph>
        <Button href="https://drive.google.com/drive/folders/1y1qWA6JTdYTtQPoEZfCJ8qKzinHXGWps" target="_blank">Link to full collection</Button>
      </Container>
    </Wrapper>
  )
}

export default Drive
