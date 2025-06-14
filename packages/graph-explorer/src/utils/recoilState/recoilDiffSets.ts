import { SetStateAction } from "jotai";

type SetterOrUpdater<T> = (valOrUpdater: SetStateAction<T>) => void;

const recoilDiffSets = <T>(
  stateSetter: SetterOrUpdater<Set<T>>,
  ...sets: Set<T>[]
) => {
  stateSetter(prev => {
    const copiedSet = new Set(prev);
    sets.forEach(set => {
      set.forEach(setItem => {
        if (prev.has(setItem)) {
          copiedSet.delete(setItem);
        } else {
          copiedSet.add(setItem);
        }
      });
    });
    return copiedSet;
  });
};

export default recoilDiffSets;
