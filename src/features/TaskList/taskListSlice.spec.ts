import taskListReducer, { TaskListState, initialTaskListState, addTask, AddTaskPayload, markTask, removeCompletedTasks } from "./taskListSlice"

describe("taskList reducer", () => {
    const initialState: TaskListState = {
        tasks: [
            {
                code: "code",
                completed: true,
                title: "first"
            }
        ]
    };
    it("should handle initial state", () => {
        expect(taskListReducer(undefined, {type: "notype"})).toEqual(initialTaskListState);
    });
    it("shoud handle addTask", () => {
        const item: AddTaskPayload = {title: "new", completed: true};
        const actual = taskListReducer(initialState, addTask(item));
        const last = initialState.tasks.length;
        expect(actual.tasks[last]).toMatchObject(item);
    });
    it("should handle markTask", () => {
        let actual = taskListReducer(initialState, markTask("code"));
        expect(actual.tasks[0].completed).toEqual(false);
        actual = taskListReducer(actual, markTask("code"));
        expect(actual.tasks[0].completed).toEqual(true);
    });
    it("should handle removeCompletedTasks", () => {
        const actual = taskListReducer(initialState, removeCompletedTasks());
        expect(actual.tasks.length).toBe(0);
    });
});