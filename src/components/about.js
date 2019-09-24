// core
import React from 'react'
import styled from 'styled-components'
import { variables, typography } from '../theme'
import { Detail } from './detail';

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75vw;
  margin: ${variables.spacer * 12}rem auto;

  @media ${variables.md} {
    margin: ${variables.spacer * 16}rem auto;
  }

  @media ${variables.lg} {
    font-size: ${typography.f2};
    margin: ${variables.spacer * 16}rem auto;
  }
`

const Intro = styled.p`
  text-align: center;
  color: ${variables.dark};
  font-size: ${typography.f3};
  font-family: ${typography.fontLight};
  margin-bottom: ${variables.spacer * 12}rem;
  line-height: 1.5;

  @media ${variables.md} {
    font-size: ${typography.f3};
    margin-bottom: ${variables.spacer * 16}rem;
    margin-left: ${variables.spacer * 8}rem;
    margin-right: ${variables.spacer * 8}rem;
  }

  @media ${variables.lg} {
    font-size: ${typography.f2};
    margin-bottom: ${variables.spacer * 16}rem;
    line-height: 1.25;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${variables.md} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media ${variables.lg} {

  }
`




// render
const About = () => {
  return (
    <Container>
      <Intro>Elliott and Sophie were married on a glorious Saturday afternoon in the heart of the city!</Intro>
        <Details>
          <Detail title="Location" description="Sheffield, England" />
          <Detail title="Date" description="20th July 2019" />
          <Detail title="Venue" description="Inox" />
          <Detail title="Weather" description="Suuuuunshiiiiinnneee" />
        </Details>
    </Container>
  )
}

export default About
