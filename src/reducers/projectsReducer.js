
export default (state=[], action)  => {
    console.log(action);
    switch(action.type) {
        case 'LIST_PROJECTS':
            return action.projects
        case 'REMOVE_PROJECT':
            return action.removeProject
        default:
            return state
    }
}