const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    throw new Error("No implementado aun"); 
}
const loadPreviousPage = async() => {
    throw new Error("No implementado aun") 
}
const onUserChanged = async() => {
    throw new Error("No implementado aun") 
}
const reloadPage = async() => {
    throw new Error("No implementado aun") 
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}