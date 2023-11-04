'use client'

import { Button, Col, Row } from "antd";
import { relative } from "path";
import { ReactNode, useState } from "react";

export default function Gallery() {
  const MAX_IMG_SHOW = 4
  const images = [
    "https://delashstudio.us/wp-content/uploads/2023/08/3-3-1.jpg",
    "https://delashstudio.us/wp-content/uploads/2023/08/eyelash-extension-procedure-woman-eye-with-long-eyelashes-eyelashes-with-rhinestone-lashes-close-up.jpg",
    "https://delashstudio.us/wp-content/uploads/2023/08/close-up-woman-posing-with-plant_23-2148888217-1.jpg",
    "https://delashstudio.us/wp-content/uploads/2023/08/woman-having-eyelash-extension-procedure.jpg",
    "https://delashstudio.us/wp-content/uploads/2023/08/close-up-beautiful-female-face-with-organic-treatment-white_155003-43625-1.jpg",
    "https://delashstudio.us/wp-content/uploads/2023/08/eye-after-makeup-procedure-permanent-makeup-eyelids-eyelash-tattooing.jpg"
  ]
  const [curPos, setCurPos] = useState<number>(0)

  function currentTransform(): string {
    return `translate(-${289 * curPos}px, 0)`;
  }

  function moveLeft() {
    if (curPos - 1 < 0) {
      setCurPos(images.length - MAX_IMG_SHOW)
    }
    else {
      setCurPos(curPos - 1)
    }
    // setCurPos(1)
  }

  function moveRight() {
    if (curPos + 1 > images.length - MAX_IMG_SHOW) {
      setCurPos(0)
    }
    else {
      setCurPos(curPos + 1)
    }
  }
  
  return (
    <div style={{ background: 'white', overflow: 'hidden', position: 'relative' }}>
      <Row gutter={16} wrap={false} style={{ transition: 'background .3s,border .3s,border-radius .3s,box-shadow .3s,transform var(--e-transform-transition-duration,.4s)', transform: currentTransform()  }}>
        {images.map((image: string): ReactNode => <Col key={1} span={6}><img style={{ maxWidth: '100%' }} src={image}></img></Col> )}
      </Row>

      <div style={{ position: 'absolute', top: 0, display: 'flex', alignItems: 'center', height: '100%' }}>
        <Button onClick={moveLeft}>Left</Button>
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'center', height: '100%' }}>
        <Button onClick={moveRight}>Right</Button>
      </div>
    </div>
  )
}