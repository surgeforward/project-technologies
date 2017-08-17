
const removeProject = (projects,id)=> projects.filter(x=> x.id != id);
export default (state=[], action)  => {
    console.log(action);
    switch(action.type) {
        case 'LIST_PROJECTS':
            return action.projects
        case 'REMOVE_PROJECT':
            return removeProject(state,action.id)
        default:
            return state
    }
}