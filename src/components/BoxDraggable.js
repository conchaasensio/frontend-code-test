import React from 'react';
import { observer } from 'mobx-react';

function BoxDraggable(props) {
  return (
    <div id={props.id} className="box">
      {props.children}
    </div>
  );
}

export default observer(BoxDraggable);
