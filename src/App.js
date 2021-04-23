import React, { useState } from 'react';

function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name ="all_star.mp3"/>
        <File name ="express_file.mp4"/>
      </Folder>
      <File name ="Dogs.jpg"/>
      <File name ="cats.png"/>
    </Folder>
    <Folder name="Applications"/>
  </div>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const { name, children } = props; // destructuring props. for clean read
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => { // manages event handler 'onClick'
    console.log('Clicked'); // monitor in console for debugging
    setIsOpen(!isOpen) // Creates switch functionality
};

  // adds span to click on folder
  return <div>
    <span onClick={handleClick}>
      <i className="folder outline icon"></i>
      <i className={`caret ${direction} icon`}></i>
      {name}</span>
    <div style={{marginLeft: '17px'}}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExt = name.split('.')[1];
  const fileIcons = {
    mp3: 'file audio outline icon',
    mp4: 'file video outline icon',
    jpg: 'file image outline icon',
    png: 'image outline icon'
  };

  return <div>
    <i className={`${fileIcons[fileExt]} icon`}></i>
    {name}</div>
}

export default App;
