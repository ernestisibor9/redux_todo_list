import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function MyTask() {
  const myTasks = useSelector((store) => store);

  // Map through
  const taskman = myTasks.tasks.map((item) => {
    return <Task item={item} />;
  });

  return (
    <div className="container">
      {/* <h1>Hello world {myTasks.tasks.length}</h1> */}
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">To do list</h5>
              <p class="card-text">{taskman}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTask;
