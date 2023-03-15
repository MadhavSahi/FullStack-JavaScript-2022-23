import React from 'react';
import Todos from './components/Todos';



const App = () => {
  return (
    <>
      <div className="text-4xl mx-10 text-orange-400 font-bold">ToDo App using REDUX</div>
      <Todos></Todos>
    </>
  )
}

export default App