import { RootState } from "./store/store";

export const persistToLocalStorage = (state: RootState) => {
    localStorage.setItem("genshin-tool-state", JSON.stringify(state));
}

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("genshin-tool-state");
        if (serializedState === null) {
            return undefined;
        }
        // TODO: Find a way to parse to RootState type
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}
