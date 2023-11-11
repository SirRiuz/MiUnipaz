import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AllTimeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1-12.083a1 1 0 1 0-2 0V7.25c0 .69.56 1.25 1.25 1.25h2.667a1 1 0 1 0 0-2H8.5V2.917Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AllTimeSvg
