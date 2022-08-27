import { CURRENTWORKSPACE, CURRENTWORKSPACEBOARDS, LAST_WORKSPACE, LIST, LOADWORKSPACE, USER, WORKSPACE } from "../constants/reduxContstants";

const initialState = {
    lastWorkspaceID: "",
    workspace: [],
    currentWorkspace: {},
    currentWorkspaceBoards: [],
    loadWorkspace: false,
    saveList: false,
    user: {}
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
        case LOADWORKSPACE:
            return {
                ...state,
                loadWorkspace: action.payload,
            }
        case LIST:
            return {
                ...state,
                saveList: action.payload,
            }
        case USER:
            return {
                ...state,
                user: action.payload,
            }



        default:
            return state;
    }
}

export default reduxReducer;