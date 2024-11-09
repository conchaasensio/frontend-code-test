import React from 'react';
import Canvas from './Canvas';
import Toolbar from './Toolbar';
import { observer } from 'mobx-react';

function App({ store }) {
  return (
    <div className="app">
      <Toolbar store={store} />
      <Canvas store={store} />
    </div>
  );
}

export default observer(App);
