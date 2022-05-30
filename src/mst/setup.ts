import { applySnapshot, getSnapshot, onSnapshot } from 'mobx-state-tree';
import { RootModel } from '.';

export const setupRootStore = () => {
  const rootTree = RootModel.create({
    employer: {
      id: '1',
      name: 'Infosystems',
      location: 'Bangalore',
      employees: [],
    },
  });
  onSnapshot(rootTree, (snapshot) => console.log('snapshot', snapshot));
  //   const currentRootTree = getSnapshot(rootTree);
  //   applySnapshot(rootTree, {
  //     ...currentRootTree,
  //     employer: { ...currentRootTree.employer, location: 'Chennai' },
  //   });
  return { rootTree };
};
