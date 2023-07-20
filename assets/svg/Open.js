import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Open = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={14}
    fill="none"
    {...props}
  >
    <Path
        stroke="rgba(0, 0, 0, 0.15)"
        strokeWidth={2} d="m1 1 6 6-6 6"
    />
  </Svg>
)
export default Open
