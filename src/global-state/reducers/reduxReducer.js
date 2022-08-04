import { LAST_WORKSPACE, WORKSPACE } from "../constants/reduxContstants";

const initialState = {
    lastWorkspaceID: "wID",
    workspace: []
}
const reduxReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAST_WORKSPACE:
            return {
                ...state,
                lastWorkspaceID: action.payload,
            }
        case WORKSPACE:
            return {
                ...state,
                workspace: action.payload,
            }



        default:
            return state;
    }
}

export default reduxReducer;