import { CURRENTWORKSPACE, CURRENTWORKSPACEBOARDS, MEMBERSWORKSPACE, LAST_WORKSPACE, LIST, LOADWORKSPACE, USER, WORKSPACE, LOADBOARD, CONVERSATIONS, CURRENTCHAT } from "../constants/reduxContstants";

const initialState = {
    lastWorkspaceID: "",
    workspace: [],
    membersWorkspace: [],
    currentWorkspace: {},
    currentWorkspaceBoards: [],
    loadWorkspace: false,
    saveList: false,
    user: {},
    loadBoard: false,
    chats: [],
    currentChatId: ""
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
        case MEMBERSWORKSPACE:
            return {
                ...state,
                membersWorkspace: action.payload,
                // lastWorkspaceID: action?.payload[0]?._id
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
        case LOADBOARD:
            return {
                ...state,
                loadBoard: action.payload,
            }
        case CONVERSATIONS:
            return {
                ...state,
                chats: action.payload,
            }

        case CURRENTCHAT:
            return {
                ...state,
                currentChatId: action.payload,
            }



        default:
            return state;
    }
}

export default reduxReducer;