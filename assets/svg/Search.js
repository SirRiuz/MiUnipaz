import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const SearchSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Circle cx={7} cy={7} r={6} stroke="#89898F" />
    <Path stroke="#89898F" strokeLinecap="round" d="m16 16-3-3" />
  </Svg>
)

export default SearchSvg
