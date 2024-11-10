import React, { act } from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../components/App';
import { MainStore } from '../stores/MainStore';

describe('App', () => {
  let store;
  beforeEach(() => {
    store = MainStore.create();
  });
  test('can add a box', () => {
    const { getByTestId } = render(<App store={store} />);

    fireEvent.click(getByTestId('add-button'));

    expect(store.boxes).toHaveLength(1);
  });

  test('can select a box', () => {
    const box = store.createBox();
    const boxId = 'box-' + box.id;
    const { getByTestId } = render(<App store={store} />);

    fireEvent.click(getByTestId(boxId));

    expect(store.boxes[0].isSelected).toBe(true);
  });

  test('can remove a box selected', () => {
    const box = store.createBox();
    const boxId = 'box-' + box.id;
    const { getByTestId } = render(<App store={store} />);
    fireEvent.click(getByTestId(boxId));

    fireEvent.click(getByTestId('remove-button'));

    expect(store.boxes).toHaveLength(0);
  });

  test('can change the color of a selected box', () => {
    const box = store.createBox();
    const boxId = 'box-' + box.id;
    const { getByTestId } = render(<App store={store} />);

    act(() => {
      fireEvent.click(getByTestId(boxId));
      store.changeBoxColor('red');
    });

    expect(store.boxes[0].color).toBe('red');
  });

  describe('Counter', () => {
    test('should start with no selected boxes', () => {
      expect(store.selectedBoxCount).toBe(0);
    });

    test('should increase when one or more boxes are selected', () => {
      const box1 = store.createBox();
      const box2 = store.createBox();
      const box1Id = 'box-' + box1.id;
      const box2Id = 'box-' + box2.id;
      const { getByTestId } = render(<App store={store} />);

      fireEvent.click(getByTestId(box1Id));
      fireEvent.click(getByTestId(box2Id));

      expect(store.selectedBoxCount).toBe(2);
    });

    test('should decrease when one or more boxes are deselected', () => {
      const box1 = store.createBox();
      const box2 = store.createBox();
      const box1Id = 'box-' + box1.id;
      const box2Id = 'box-' + box2.id;
      const { getByTestId } = render(<App store={store} />);
      fireEvent.click(getByTestId(box1Id));
      fireEvent.click(getByTestId(box2Id));
      expect(store.selectedBoxCount).toBe(2);

      fireEvent.click(getByTestId(box1Id));

      expect(store.selectedBoxCount).toBe(1);
    });
  });
});
