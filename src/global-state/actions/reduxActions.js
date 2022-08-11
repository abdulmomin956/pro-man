//last workspace

import { LAST_WORKSPACE, WORKSPACE, CURRENTWORKSPACE, CURRENTWORKSPACEBOARDS } from "../constants/reduxContstants"

//isInBoard
export const setWorkspaceID = (lastWorkspaceID) => {
    return {
        type: LAST_WORKSPACE,
        payload: lastWorkspaceID
    }
}
export const setWorkspace = (workspace) => {
    return {
        type: WORKSPACE,
        payload: workspace
    }
}
export const setCurrentWorkspace = (currentWorkspace) => {
    return {
        type: CURRENTWORKSPACE,
        payload: currentWorkspace
    }
}
export const setCurrentBoards = (currentBoards) => {
    return {
        type: CURRENTWORKSPACEBOARDS,
        payload: currentBoards
    }
}