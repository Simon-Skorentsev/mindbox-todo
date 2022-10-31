import toolsReducer, { changeFilter, initialToolsState, ToolsSlice } from "./toolsListSlice";

describe("tools reducer", () => {
    const initialState: ToolsSlice = {
        filter: "all"
    };
    it("should handle initial state", () => {
        expect(toolsReducer(undefined, { type: "notype" })).toEqual(initialToolsState);
    });
    it("should handle changeFilter", () => {
        let actual = toolsReducer(initialState, changeFilter());
        expect(actual.filter).toBe("active");
        actual = toolsReducer(actual, changeFilter());
        expect(actual.filter).toBe("completed");
        actual = toolsReducer(actual, changeFilter());
        expect(actual.filter).toBe("all");
        actual = toolsReducer(actual, changeFilter());
        expect(actual.filter).toBe("active");
    });
});