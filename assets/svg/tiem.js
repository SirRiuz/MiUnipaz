import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const TimeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={5} r={3.833} stroke="#888787" />
    <Path
      stroke="#888787"
      strokeLinecap="round"
      d="M6.875 5H5.25A.25.25 0 0 1 5 4.75V3.542"
    />
  </Svg>
)
export default TimeSvg
