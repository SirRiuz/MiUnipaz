import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const FailSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={5} r={3.75} stroke="#FF3B30" />
    <Path stroke="#FF3B30" d="m3.75 6.25 2.5-2.5M6.25 6.25l-2.5-2.5" />
  </Svg>
)
export default FailSvg
