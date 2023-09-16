import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHTTP from "./hooks/use-http";

function App() {

  const [tasks, setTasks] = useState([]);

  const taskAddHandler = (task) => {setTasks(prevTasks => prevTasks.concat(task));console.log(tasks);} 


  // const task_updater = useCallback((unprocessed_data) => {

  //     const loadedTasks = [];

  //     for (const taskKey in unprocessed_data) {
  //       loadedTasks.push({ id: taskKey, text: unprocessed_data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);

  //   },[]);

  //const req_obj = React.useMemo(()=>{return {url:"https://react-movies-43e3d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",method:"GET"}},[]);  
  //const {isLoading,error,fetchData:fetchData} = useHTTP(req_obj,task_updater);
  const {isLoading,error,fetchData:fetchData} = useHTTP();






  useEffect(() => {

    const task_updater = (unprocessed_data) => {

      const loadedTasks = [];

      for (const taskKey in unprocessed_data) {
        loadedTasks.push({ id: taskKey, text: unprocessed_data[taskKey].text });
      }

      setTasks(loadedTasks);

    };

    fetchData({url:"",method:"GET"},task_updater); //Add Firebase URL

  }, [fetchData]);



  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks} //tasks function
        loading={isLoading}
        error={error}
        onFetch={fetchData} //Errors with the fetchData function
      />
    </React.Fragment>
  );
}

export default App;
