import { Button } from "antd"
import { ReactNode, CSSProperties } from "react"

export default function CustomButton( props: { children: ReactNode, style?: CSSProperties } ) {
  return <Button size="large" style={{ borderRadius: 0, fontWeight: 'bold', paddingLeft: 20, paddingRight: 20, ...props.style }}>{props.children}</Button>
}