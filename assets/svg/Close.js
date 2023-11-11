import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CloseModalSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#86868b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.25 3.75-7.5 7.5M3.75 3.75l7.5 7.5"
    />
  </Svg>
)
export default CloseModalSvg
