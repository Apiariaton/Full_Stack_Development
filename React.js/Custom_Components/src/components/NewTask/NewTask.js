import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import useHTTP from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, fetchData: fetchData } = useHTTP();

  const createTask = (taskText,taskData) => { //Issue here: taskData is the value of taskText, when it should contain request object.
    console.log(taskData);
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    console.log(generatedId);
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
    };


  //Bind is sensitive to the order of arguments. In this case, 
  //by switching the order of taskText with taskData, the function
  //worked differently. It stores values to the parameters of the function it is applied to, in order.
  //This means that before taskData was the first argument, so taskText was stored to this first parameter, taskData.
  //Now taskData is the first parameter, it means that the first argument, taskText, is substituted for the correct parameter, taskText.
  const enterTaskHandler = async (taskText) => {
    const bound_function = createTask.bind(null,taskText);
    console.log("This is taskText:");
    console.log(taskText); 
    fetchData({
      url: "", //Replace with Firebase URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {text: taskText},
    }, bound_function);
  };
    // try {
    //   const response = await fetch(
    //     "https://react-movies-43e3d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

      // if (!response.ok) {
      //   console.log(response);
      //   throw new Error("Request failed!");
      // }



  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};



export default NewTask;
