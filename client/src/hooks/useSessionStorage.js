import { useState } from "react";

export default function useSessionStorage(stateKey, initalState) {
    const [state, setState] = useState(() => {
        const sessionState = sessionStorage.getItem(stateKey);

        if (!sessionState) {
            return typeof initalState === 'function'
                ? initalState()
                : initalState;
        }

        const sessionStateData = JSON.parse(sessionState);

        return sessionStateData;
    });

    const setSessionState = (input) => {
        const data = typeof input === 'function'
            ? input(state)
            : input;

        const sessionData = JSON.stringify(data);

        sessionStorage.setItem(stateKey, sessionData);

        setState(data);
    };

    return [
        state,
        setSessionState,
    ]
}