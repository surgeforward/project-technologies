
export default (state=[], action)  => {
    switch(action.type) {
        case 'LIST_PROJECTS':
            return action.projects
        default:
            return state
    }
}