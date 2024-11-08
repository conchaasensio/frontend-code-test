import { types } from 'mobx-state-tree';

const BoxModel = types
  .model('Box', {
    id: types.identifier,
    isSelected: types.optional(types.boolean, false),
    width: types.optional(types.number, 100),
    height: types.optional(types.number, 100),
    color: types.optional(types.string, '#FFF000'),
    x: types.optional(types.number, 200),
    y: types.optional(types.number, 100),
  })
  .views((self) => ({}))
  .actions((self) => ({
    select() {
      self.isSelected = true;
    },
    deselect() {
      self.isSelected = false;
    },
    setPosition(newX, newY) {
      self.x = newX;
      self.y = newY;
    },
  }));

export default BoxModel;
