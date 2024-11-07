import React from 'react';
import BoxModel from '../stores/models/Box';
import store from '../stores/MainStore';
import { v4 as uuid } from 'uuid';
import getRandomColor from '../utils/getRandomColor';

function Toolbar() {
  const handleAddButton = () => {
    const newBox = BoxModel.create({
      id: uuid(),
      color: getRandomColor(),
      left: 10,
      top: 20,
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
      <span>No boxes selected</span>
    </div>
  );
}

export default Toolbar;
