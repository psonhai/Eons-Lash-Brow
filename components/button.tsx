import { Button } from "antd"
import { ReactNode, CSSProperties, HTMLProps } from "react"

import styles from './button.module.css'

export default function CustomButton( props: { children: ReactNode, style?: CSSProperties, className?: HTMLProps<HTMLElement>["className"] } ) {
  return <Button className={[styles.button, props.className].join(' ')} size="large" style={{ borderRadius: 0, fontWeight: 'bold', paddingLeft: 20, paddingRight: 20, color: 'black', ...props.style }}>{props.children}</Button>
}