import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


describe("app render", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });
    test("Tools render", () => {
        expect(screen.getByPlaceholderText(/what needs to be done/i)).toBeInTheDocument();
    });
    test("TaskList render", () => {
        expect(screen.getByRole("list")).toBeInTheDocument();
    });
});

