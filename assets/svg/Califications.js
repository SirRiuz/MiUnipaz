import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CalificationsSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M13 1v3M5 1v3"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11 2H7v2a2 2 0 1 1-4 0V2.076c-.975.096-1.631.313-2.121.803C0 3.757 0 5.172 0 8v5c0 2.828 0 4.243.879 5.121C1.757 19 3.172 19 6 19h6c2.828 0 4.243 0 5.121-.879C18 17.243 18 15.828 18 13V8c0-2.828 0-4.243-.879-5.121-.49-.49-1.146-.707-2.121-.803V4a2 2 0 1 1-4 0V2Zm-7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default CalificationsSvg
