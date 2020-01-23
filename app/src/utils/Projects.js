import axios from 'axios';

export const Projects = {
    // get all projects
    getAll: () => {
        return axios.get('http://localhost:3001/api/projects')
    },
    // upload a project
    upload: () => {
        return axios.post('http://localhost:3001/api/projects/create');
    },
    // update a project
    update: () => {
        console.log('update project by id in mongodb/portfolio');
    },
    // delete a project
    delete: (id) => {
        return axios.delete(`http://localhost:3001/api/projects/delete/${id}`);
    },
    callBackend: () => {
        return axios.get('http://localhost:3001/');
    },

};