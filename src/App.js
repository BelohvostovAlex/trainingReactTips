import React from 'react'
import './App.css';
import List from './List';

function App() {
  const [visibleList,setVisibleList] = React.useState(true)

  const toggleVisibleList = () => {
    setVisibleList(!visibleList)
  }
 
  return (
  <div>
   {visibleList && 
     <List />}
     <button onClick={toggleVisibleList}>Show/Hide</button>
  </div>
   
  );
}

export default App;
