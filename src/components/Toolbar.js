import React from 'react';
import { observer } from 'mobx-react';
import BoxModel from '../stores/models/Box';
import store from '../stores/MainStore';
import { v4 as uuid } from 'uuid';
import getRandomColor from '../utils/getRandomColor';

function Toolbar() {
  const handleAddButton = () => {
    const newBox = BoxModel.create({
      id: uuid(),
      color: getRandomColor(),
      left: 100,
      top: 200,
    });

    store.addBox(newBox);
  };

  const handleRemoveButton = () => {
    store.removeBox();
  };

  return (
    <div className="toolbar">
      <button onClick={handleAddButton}>Add Box</button>
      <button onClick={handleRemoveButton}>Remove Box</button>
      <input type="color" />
      <span>Boxes selected: {store.selectedBoxCount}</span>
    </div>
  );
}

export default observer(Toolbar);
