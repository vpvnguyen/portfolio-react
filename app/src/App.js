import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState('projects')

  useEffect(() => {
    console.log('useEffect()')
    axios.get('http://ec2-13-59-49-63.us-east-2.compute.amazonaws.com/')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  })

  return (
    <div className="App">
      front page
    </div>
  );
}

export default App;
