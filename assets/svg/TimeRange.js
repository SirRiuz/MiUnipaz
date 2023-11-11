import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const TimeRangeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Circle cx={9.5} cy={11.083} r={6.333} stroke="#fff" strokeWidth={2} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9.5 11.083V8.708M13.854 5.938l1.188-1.188M7.97 1.877c.09-.084.29-.159.566-.212.277-.053.615-.082.964-.082s.687.03.964.082c.276.053.475.128.565.212"
    />
  </Svg>
)
export default TimeRangeSvg
