import { atom } from 'recoil';
export const chooseStartDate = atom({
  key: 'chooseStartDate',
  default: new Date('2022/02/01')
});

export const chooseEndDate = atom({
  key: 'chooseEndDate',
  default: new Date('2022/04/20')
})

