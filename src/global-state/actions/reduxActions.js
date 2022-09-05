//last workspace

import { LAST_WORKSPACE, WORKSPACE, MEMBERSWORKSPACE, CURRENTWORKSPACE, CURRENTWORKSPACEBOARDS, LOADWORKSPACE, LIST, USER, LOADBOARD, CONVERSATIONS } from "../constants/reduxContstants"

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
export const setMembersWorkspace = (workspace) => {
    return {
        type: MEMBERSWORKSPACE,
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
export const setLoadWorkspace = (data) => {
    return {
        type: LOADWORKSPACE,
        payload: data
    }
}
export const setSaveList = (data) => {
    return {
        type: LIST,
        payload: data
    }
}
export const setUser = (data) => {
    return {
        type: USER,
        payload: data
    }
}
export const setLoadBoard = (data) => {
    return {
        type: LOADBOARD,
        payload: data
    }
}
export const setChats = (data) => {
    return {
        type: CONVERSATIONS,
        payload: data
    }
}