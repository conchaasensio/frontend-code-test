import { types, getSnapshot, applySnapshot } from 'mobx-state-tree';
import { UndoManager } from 'mst-middlewares';
import { v4 as uuid } from 'uuid';
import BoxModel from './models/Box';
import getRandomColor from '../utils/getRandomColor';

export const MainStore = types
  .model('MainStore', {
    boxes: types.array(BoxModel),
  })
  .views((self) => ({
    get selectedBoxCount() {
      return self.boxes.filter((box) => box.isSelected).length;
    },

    get canUndo() {
      return undoManager.canUndo;
    },

    get canRedo() {
      return undoManager.canRedo;
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
        return newBox;
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

      undo() {
        if (undoManager.canUndo) {
          undoManager.undo();
        }
      },

      redo() {
        if (undoManager.canRedo) {
          undoManager.redo();
        }
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

const undoManager = UndoManager.create({}, { targetStore: store });

export default store;
export { undoManager };
