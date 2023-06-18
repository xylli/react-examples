import {Dispatch, Reducer} from "react";

interface State {
    toggle: boolean;
}

type Action = {
    type: "toggle"
};

export type ToggleDispatch = Dispatch<Action>

export const defaultToggleState: State = {
    toggle: false
}

const toggleReducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case 'toggle': {
            return {
                toggle: !state.toggle,
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export default toggleReducer;