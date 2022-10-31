import { createSlice } from "@reduxjs/toolkit";

enum Filter { all, active, completed }
export const initialToolsState: ToolsSlice = {
  filter: "all"
};

export const toolsSlice = createSlice({
  name: 'tools',
  initialState: initialToolsState,
  reducers: {
    changeFilter(state) {
      //номер фильтра в enum
      const index = Filter[state.filter];
      //после последнего должен идти первый
      const next = (index + 1) % (Object.keys(Filter).length / 2);
      state.filter = <keyof typeof Filter>Filter[next];
    }
  }
});

export interface ToolsSlice {
  filter: keyof typeof Filter
}

export const { changeFilter } = toolsSlice.actions;

export default toolsSlice.reducer;
