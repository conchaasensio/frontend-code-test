import React from 'react';
import { observer } from 'mobx-react';
import BoxDraggable from './BoxDraggable';

function Box({ id, isSelected, handleBoxClick, ...props }) {
  const handleClick = () => {
    handleBoxClick(id); // Llama a handleBoxClick con el id de esta caja
  };
  return (
    <BoxDraggable {...props}>
      <div
        onClick={handleClick}
        style={{
          border: isSelected ? '2px solid blue' : '1px solid gray',
          padding: '10px',
          backgroundColor: isSelected ? 'lightblue' : 'white',
          cursor: 'pointer',
        }}
      >
        Box
      </div>
    </BoxDraggable>
  );
}

export default observer(Box);
