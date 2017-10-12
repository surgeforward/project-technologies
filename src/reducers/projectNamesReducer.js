

export default (state={projectNames:[]}, action)  => {
// export default (state={projects:[],projectNames:[]}, action)  => {
    switch(action.type) {
        case 'LIST_PROJECTS':
            return action.projectNames
        default:
            return state
    }
}