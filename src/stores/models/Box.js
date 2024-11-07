import { types } from 'mobx-state-tree';

const BoxModel = types
  .model('Box', {
    id: types.identifier,
    isSelected: types.optional(types.boolean, false),
    width: 200,
    height: 100,
    color: '#FFF000',
    left: 200,
    top: 100,
  })
  .views((self) => ({}))
  .actions((self) => ({
    select() {
      self.isSelected = true;
    },
    deselect() {
      self.isSelected = false;
    },
  }));

export default BoxModel;
