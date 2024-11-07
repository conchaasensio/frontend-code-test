import React from 'react';
import { observer } from 'mobx-react';
import store from '../stores/MainStore';

function Toolbar() {
  const handleAddButton = () => {
    store.createBox();
  };

  const handleRemoveButton = () => {
    store.removeBox();
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    store.changeBoxColor(newColor);
  };

  return (
    <div className="toolbar">
      <button onClick={handleAddButton}>Add Box</button>
      <button onClick={handleRemoveButton}>Remove Box</button>
      <input type="color" onChange={handleColorChange} />
      <span>Boxes selected: {store.selectedBoxCount}</span>
    </div>
  );
}

export default observer(Toolbar);
