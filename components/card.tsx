import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import { ReactNode, CSSProperties } from "react"


export function SimpleCard( props: { children: ReactNode, style?: CSSProperties, title: string, description: string} ) {
  return (
    <Card
      style={{ boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.1)' }}
    >
      <Meta title={<div style={{ fontSize: 25, fontWeight: 'bold' }}>{props.title}</div>} description={<div>{props.description}</div>} />
    </Card>
  )
}

export default function CustomCard( props: { children: ReactNode, style?: CSSProperties, title: string, description: string, imageUrl: string } ) {
  return (
    <Card
      style={{ boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.1)' }}
      cover={<img alt="example" src={props.imageUrl} style={{ width: 150, margin: 'auto', paddingTop: 40 }}/>}
    >
      <Meta title={<div style={{ textAlign: 'center', fontSize: 25 }}>{props.title}</div>} description={<div style={{ color: 'black', padding: 10, textAlign: 'center' }}>{props.description}</div>} />
    </Card>
  )
};