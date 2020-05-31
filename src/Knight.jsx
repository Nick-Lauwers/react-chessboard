import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const knightStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move'
}

export const Knight = () => {

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div ref={drag} style={{ ...knightStyle,
        										 opacity: isDragging ? 0.5 : 1 }}>
      ♘
    </div>
  )
}