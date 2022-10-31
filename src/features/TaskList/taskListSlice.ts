import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialTaskListState: TaskListState = {
  tasks: localStorage.getItem("tasks") && JSON.parse(localStorage.getItem("tasks")!) ||
    [{ code: "foo", title: "first", completed: false }, { code: "bar", title: "sec", completed: false }]
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: initialTaskListState,
  reducers: {
    addTask(state, action: PayloadAction<AddTaskPayload>) {
      if (action.payload.title.trim() === '') return;
      state.tasks.push({ code: new Date().toISOString(), ...action.payload });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    markTask(state, action: PayloadAction<Task["code"]>) {
      const index = state.tasks.findIndex(task => task.code === action.payload);
      const item = state.tasks[index];
      item.completed = !item.completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeCompletedTasks(state) {
      state.tasks = state.tasks.filter(task => task.completed === false);
      if (state.tasks.length !== 0) {
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      } else localStorage.removeItem("tasks");
    }
  }
});

export interface TaskListState {
  tasks: Task[]
}

export interface Task {
  code: string,
  title: string,
  completed: boolean
}

export type AddTaskPayload = Omit<Task, "code">;

export const { addTask, markTask, removeCompletedTasks } = taskListSlice.actions;

export default taskListSlice.reducer;
