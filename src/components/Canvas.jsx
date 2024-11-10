import React from 'react';
import { observer } from 'mobx-react';
import Box from '../components/Box';

function Canvas({ store }) {
  return (
    <div className="canva">
      {store.boxes.map((box) => (
        <Box
          id={box.id}
          key={box.id}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          box={box}
          isSelected={box.isSelected}
          handleBoxClick={store.selectBox}
          onUpdatePosition={store.moveBox}
        />
      ))}
    </div>
  );
}

export default observer(Canvas);
