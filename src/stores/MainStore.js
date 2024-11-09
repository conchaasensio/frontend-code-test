import { types, getSnapshot, applySnapshot } from 'mobx-state-tree';
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
        self.saveState();
      },
      addBox(box) {
        self.boxes.push(box);
        self.saveState();
      },

      selectBox(id) {
        const box = self.boxes.find((box) => box.id === id);
        box.isSelected = !box.isSelected;
        self.saveState();
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
        self.saveState();
      },

      removeBox() {
        self.boxes = self.boxes.filter((box) => !box.isSelected);
        self.saveState();
      },

      changeBoxColor(color) {
        self.boxes.forEach((box) => {
          if (box.isSelected) {
            box.color = color;
          }
        });
        self.saveState();
      },

      saveState() {
        const snapshot = getSnapshot(self);
        localStorage.setItem('appState', JSON.stringify(snapshot));
      },

      restoreState() {
        const savedState = localStorage.getItem('appState');
        if (savedState) {
          try {
            const parsedSnapshot = JSON.parse(savedState);
            applySnapshot(self, parsedSnapshot);
          } catch (error) {
            console.error('Error restoring state:', error);
          }
        }
      },
    };
  })
  .views((self) => ({}));

const store = MainStore.create();

store.restoreState();

export default store;
