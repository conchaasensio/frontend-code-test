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
      createBox() {
        const newBox = BoxModel.create({
          id: uuid(),
          color: getRandomColor(),
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

      moveBox(id, changeX, changeY) {
        const box = store.boxes.find((box) => box.id === id);
        if (!box.isSelected) {
          box.setPosition(box.x + changeX, box.y + changeY);
        } else {
          store.boxes
            .filter((box) => box.isSelected)
            .forEach((box) => {
              box.setPosition(box.x + changeX, box.y + changeY);
            });
        }
      },

      removeBox() {
        self.boxes = self.boxes.filter((box) => !box.isSelected);
      },

      changeBoxColor(color) {
        self.boxes.forEach((box) => {
          if (box.isSelected) {
            box.color = color;
          }
        });
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
