import axios from "axios";

// define actions to mongodb
export const Projects = {
  // get all projects
  getAll: () => {
    return axios.get("http://localhost:3001/api/projects");
  },
  // upload a project
  upload: () => {
    return axios.post("http://localhost:3001/api/projects/create");
  },
  // update a project by id;
  update: (id, title, desc, link) => {
    //axios.put(url[, data[, config]])
    const updateObject = {
      title: "potter",
      desc: "new desc",
      link: "newlinkurl.com"
    };

    const allKeys = Object.keys(updateObject);

    console.log(allKeys)

      return axios.put(`http://localhost:3001/api/projects/update/${id}`, 
        updateObject
      );
  },
  // delete a project
  delete: id => {
    return axios.delete(`http://localhost:3001/api/projects/delete/${id}`);
  },
  callBackend: () => {
    return axios.get("http://localhost:3001/");
  }
};
