import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SignatureSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M4.752 3.92c-.585.585-.585 1.528-.585 3.413V13.5c0 1.886 0 2.828.585 3.414.586.586 1.53.586 3.415.586h3.666c1.886 0 2.829 0 3.415-.586.585-.586.585-1.528.585-3.414V7.333c0-1.885 0-2.828-.585-3.414-.586-.586-1.529-.586-3.415-.586H8.167c-1.886 0-2.829 0-3.415.586ZM7.5 6.5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2h-5Zm0 3.333a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2h-5Zm0 3.334a1 1 0 1 0 0 2h3.333a1 1 0 0 0 0-2H7.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SignatureSvg
