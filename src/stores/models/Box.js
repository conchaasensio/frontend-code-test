import { types } from 'mobx-state-tree';

const BoxModel = types
  .model('Box', {
    id: types.identifier,
    isSelected: types.optional(types.boolean, false),
    width: types.optional(types.number, 100), // Valor predeterminado de 100
    height: types.optional(types.number, 100), // Valor predeterminado de 100
    color: types.optional(types.string, '#FFF000'),
    left: types.optional(types.number, 200),
    top: types.optional(types.number, 100),
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
