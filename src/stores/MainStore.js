import { types } from 'mobx-state-tree';
import { v4 as uuid } from 'uuid';
import BoxModel from './models/Box';
import getRandomColor from '../utils/getRandomColor';

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
  })
  .actions((self) => {
    return {
      addBox(box) {
        self.boxes.push(box);
      },

      selectBox(id) {
        self.boxes.forEach((box) => (box.isSelected = false));
        const boxToSelect = self.boxes.find((box) => box.id === id);
        if (boxToSelect) boxToSelect.isSelected = true;
      },

      removeBox() {
        const index = self.boxes.findIndex((box) => box.isSelected);
        self.boxes.splice(index, 1);
      },
    };
  })
  .views((self) => ({}));

const store = MainStore.create();

const box1 = BoxModel.create({
  id: uuid(),
  color: getRandomColor(),
  left: 0,
  top: 0,
});

store.addBox(box1);

export default store;
