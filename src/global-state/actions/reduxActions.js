//last workspace

import { LAST_WORKSPACE, WORKSPACE, CURRENTWORKSPACE } from "../constants/reduxContstants"

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