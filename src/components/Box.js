import React from 'react';
import { observer } from 'mobx-react';
import BoxDraggable from './BoxDraggable';

function Box({ id, isSelected, handleBoxClick, color, ...props }) {
  const handleClick = () => {
    handleBoxClick(id);
  };
  return (
    <BoxDraggable {...props}>
      <div
        onClick={handleClick}
        style={{
          border: isSelected ? '2px solid blue' : '1px solid gray',
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          cursor: 'pointer',
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
