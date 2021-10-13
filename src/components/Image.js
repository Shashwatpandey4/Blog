import styled from "styled-components"
import Img from "gatsby-image"
import {BREAKPOINT} from "../utils/constants"

export const Image = styled(Img)`
  margin: 0 5% 5vh 30%;
  height : 50vh;
  width : 50vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 0 5vh 20%;
    height : 50vh;
    width : 50vh;
  }
`
