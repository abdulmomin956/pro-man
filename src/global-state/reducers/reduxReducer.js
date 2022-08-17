import { CURRENTWORKSPACE, CURRENTWORKSPACEBOARDS, LAST_WORKSPACE, WORKSPACE } from "../constants/reduxContstants";

const initialState = {
    lastWorkspaceID: "",
    workspace: [],
    currentWorkspace: {},
    currentWorkspaceBoards: []
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
                lastWorkspaceID: action?.payload[0]?._id
            }
        case CURRENTWORKSPACE:
            return {
                ...state,
                currentWorkspace: action.payload,
            }
        case CURRENTWORKSPACEBOARDS:
            return {
                ...state,
                currentWorkspaceBoards: action.payload,
            }



        default:
            return state;
    }
}

export default reduxReducer;