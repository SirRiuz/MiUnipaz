import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const ProfileSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      stroke="#0070FF"
      strokeLinecap="round"
      d="M8.22 8.52c-.19-.532-.609-1.002-1.19-1.337-.583-.335-1.296-.516-2.03-.516-.734 0-1.447.181-2.03.516-.581.335-1 .805-1.19 1.337"
    />
    <Circle
      cx={5}
      cy={3.333}
      r={1.667}
      stroke="#0070FF"
      strokeLinecap="round"
    />
  </Svg>
)

export default ProfileSvg
