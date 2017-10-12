
const removeProject = (projects,id)=> {
    console.log('remove: %o %o',id, projects.filter(x=> x.id != id));
    return [...projects.filter(x=> x.id != id)];
} 
const addProject = (projects, newProject)=> {
    console.log(projects);
   let p = [...projects, newProject];
   return p;
}

const updateProject = (projects,updatedProject) => {
    var projectMatchFilter = project=> {
        return project.id === updatedProject.id
    }
    var oldObj = projects.find(projectMatchFilter);
    if(oldObj) {
        const updatedResult = Object.assign({},oldObj,updatedProject)
        return projects.filter(project=> project.id !== updatedProject.id)
                        .concat(updatedResult)
    }
    return projects
}

 export default (state={projects:[],projectNames:[]}, action)  => {
    switch(action.type) {
        case 'LIST_PROJECTS':
            return action.projects;
        case 'REMOVE_PROJECT':
            return removeProject(state,action.id);
        case 'ADD_PROJECT':
            return addProject(state,action.newProject);
        case 'UPDATE_PROJECT':
            return updateProject(state,action.updatedProject);

        default:
            return state
    }
}