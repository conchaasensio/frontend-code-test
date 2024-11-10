import React from 'react';
import { observer } from 'mobx-react';

function Toolbar({ store }) {
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

  const handleUndo = () => {
    store.undo();
  };

  const handleRedo = () => {
    store.redo();
  };

  return (
    <div className="toolbar">
      <button data-testid="add-button" onClick={handleAddButton}>
        Add Box
      </button>
      <button
        data-testid="remove-button"
        onClick={handleRemoveButton}
        disabled={!store.hasBoxes || !store.hasSelectedBoxes}
      >
        Remove Box
      </button>
      <input type="color" onChange={handleColorChange} disabled={!store.hasBoxes || !store.hasSelectedBoxes} />
      <button data-testid="undo-button" onClick={handleUndo} disabled={!store.canUndo}>
        Undo
      </button>
      <button data-testid="redo-button" onClick={handleRedo} disabled={!store.canRedo}>
        Redo
      </button>
      <span>Boxes selected: {store.selectedBoxCount}</span>
    </div>
  );
}

export default observer(Toolbar);
