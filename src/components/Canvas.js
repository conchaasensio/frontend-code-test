import React from 'react';

import { observer } from 'mobx-react';
import Box from '../components/Box';

function Canvas({ store }) {
  const handleBoxClick = (id) => {
    store.selectBox(id);
  };
  return (
    <div className="canva">
      {store.boxes.map((box, index) => (
        <Box
          id={box.id}
          key={index}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          box={box}
          isSelected={box.isSelected}
          handleBoxClick={handleBoxClick}
        />
      ))}
    </div>
  );
}

export default observer(Canvas);
