import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const CheckSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={5} r={3.75} stroke="#1BCB56" />
    <Path stroke="#1BCB56" d="m3.333 5 1.25 1.25 2.084-2.5" />
  </Svg>
)
export default CheckSvg
