import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const TeacherSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M16.376 17.005c.461-.096.735-.579.506-.99-.504-.906-1.3-1.703-2.316-2.31C13.256 12.924 11.65 12.5 10 12.5c-1.651 0-3.256.424-4.566 1.205-1.017.607-1.812 1.404-2.316 2.31-.23.411.045.893.506.99 4.205.876 8.547.876 12.752 0Z"
    />
    <Circle cx={10} cy={6.667} r={4.167} fill="#fff" />
  </Svg>
)
export default TeacherSvg
