import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../components/App';
import { MainStore } from '../stores/MainStore';

test('can add a box', () => {
  const store = MainStore.create();
  const { getByTestId } = render(<App store={store} />);

  fireEvent.click(getByTestId('add-button'));

  expect(store.boxes).toHaveLength(1);
});

test('can select a box', () => {
  const store = MainStore.create();
  const box = store.createBox();
  const boxId = 'box-' + box.id;
  const { getByTestId } = render(<App store={store} />);

  fireEvent.click(getByTestId(boxId));

  expect(store.boxes[0].isSelected).toBe(true);
});

test('can remove a box selected', () => {
  const store = MainStore.create();
  const box = store.createBox();
  const boxId = 'box-' + box.id;
  const { getByTestId } = render(<App store={store} />);
  fireEvent.click(getByTestId(boxId));

  fireEvent.click(getByTestId('remove-button'));

  expect(store.boxes).toHaveLength(0);
});
