import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../components/App';
import store from '../stores/MainStore';

test('can select a box', () => {
  const boxId = createBox();
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId(boxId));

  expect(store.boxes[0].isSelected).toBe(true);
});

function createBox() {
  const box = store.createBox();
  return 'box-' + box.id;
}
