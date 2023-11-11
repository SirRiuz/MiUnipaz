import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LocationSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7.398 15.804C8.881 15.034 14 12.016 14 7A7 7 0 1 0 0 7c0 5.016 5.119 8.035 6.602 8.804a.855.855 0 0 0 .796 0ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default LocationSvg
