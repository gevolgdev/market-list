import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListProps } from '../../../types/types';
import { RootState } from '../reducer';


const initialState: ListProps[] = [{
  title: '',
  priority: '',
  color: '',
}];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addLists: (state, { payload }: PayloadAction<ListProps>): ListProps[] => {

      const newList: ListProps = {
        title: payload.title,
        priority: payload.priority,
        color: payload.color,
      }

      return [...state, newList];
    },
  }
});

export default listSlice.reducer;
export const { addLists } = listSlice.actions;

export const SelectAddList = (state: RootState) => state;