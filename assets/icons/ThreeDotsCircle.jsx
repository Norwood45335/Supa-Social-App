import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg";

const ThreeDotsCircle = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Circle cx="17.75" cy="6.25" r="4.25" stroke="currentColor" strokeWidth={props.strokeWidth} />
    <Circle cx="6.25" cy="6.25" r="4.25" stroke="currentColor" strokeWidth={props.strokeWidth} />
    <Circle cx="17.75" cy="17.75" r="4.25" stroke="currentColor" strokeWidth={props.strokeWidth} />
    <Circle cx="6.25" cy="17.75" r="4.25" stroke="currentColor" strokeWidth={props.strokeWidth} />
  </Svg>
);

export default ThreeDotsCircle;
