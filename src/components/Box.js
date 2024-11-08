import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';
import { observer } from 'mobx-react';
import BoxDraggable from './BoxDraggable';

function Box({ box, onUpdatePosition, id, isSelected, handleBoxClick, color, ...props }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      interact(boxRef.current).draggable({
        listeners: {
          move(event) {
            const newX = box.x + event.dx;
            const newY = box.y + event.dy;

            onUpdatePosition(box.id, newX, newY);
          },
        },
      });
    }

    return () => {
      if (boxRef.current) {
        interact(boxRef.current).unset();
      }
    };
  }, [boxRef, box, onUpdatePosition]);
  const handleClick = () => {
    handleBoxClick(id);
  };
  return (
    <BoxDraggable {...props}>
      <div
        ref={boxRef}
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: box.y,
          left: box.x,
          border: isSelected ? '2px solid blue' : '1px solid gray',
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          boxShadow: isSelected ? '0px 0px 10px rgba(0, 0, 255, 0.5)' : 'none',
          transform: isSelected ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.2s ease',
        }}
      >
        Box
      </div>
    </BoxDraggable>
  );
}

export default observer(Box);
