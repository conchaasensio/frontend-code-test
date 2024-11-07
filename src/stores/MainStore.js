import { types } from 'mobx-state-tree';
import { v4 as uuid } from 'uuid';
import BoxModel from './models/Box';
import getRandomColor from '../utils/getRandomColor';

const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
  })
  .views((self) => ({
    get selectedBoxCount() {
      return self.boxes.filter((box) => box.isSelected).length;
    },
  }))
  .actions((self) => {
    return {
      createAndAddBox() {
        const newBox = BoxModel.create({
          id: uuid(),
          color: getRandomColor(),
          left: 100,
          top: 200,
        });
        self.boxes.push(newBox);
      },
      addBox(box) {
        self.boxes.push(box);
      },

      selectBox(id) {
        const box = self.boxes.find((box) => box.id === id);
        if (box) {
          box.isSelected = !box.isSelected;
        }
      },

      removeBox() {
        self.boxes = self.boxes.filter((box) => !box.isSelected);
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
