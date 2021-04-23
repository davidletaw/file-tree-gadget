import React from 'react';

function App() {
  return <div>
    <Folder name="Desktop">
      Some stuff
    </Folder>
    <Folder name="Applications"/>
    <File name ="Dogs.jpg"/>
  </div>
}

const Folder = (props) => {
  console.log(props)
  return <h3>{props.name}</h3>
};

const File = (props) => {
  return <div>{props.name}</div>
}

export default App;
