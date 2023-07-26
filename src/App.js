import React, { useState } from "react";
import uuid from "react-uuid";
import List from "./List";
import {} from "./App.css";
import Add from "./Add";

const initTasks = [
    { id: uuid(), name: "do homework", isEdit: false, done: false },
];

const getInitObj = () => {
    return {
        id: uuid(),
        name: "",
        isEdit: false,
        done: false,
    };
};

function App() {
    const [tasks, setTasks] = useState(initTasks);
    const [obj, setObj] = useState(getInitObj());

    const changeEdit = (id) =>
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.isEdit = !task.isEdit;
                }

                return task;
            })
        );

    const changeList = (id, field, e) =>
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task[field] = e.target.value;
                }

                return task;
            })
        );

    const addTask = () => {
        setTasks([...tasks, obj]);
        setObj(getInitObj());
    };

    const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

    const changeProp = (e) => setObj({ ...obj, name: e.target.value });

    const checker = (id, e) =>
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.done = !task.done;
                    e.target.previousElementSibling.classList.toggle("cross");
                }

                return task;
            })
        );

    const result = tasks.map((task) => {
        return (
            <List
                key={task.id}
                id={task.id}
                name={task.name}
                isEdit={task.isEdit}
                done={task.done}
                checker={checker}
                changeList={changeList}
                changeEdit={changeEdit}
                deleteTask={deleteTask}
            />
        );
    });

    return (
        <div>
            <ul>{result}</ul>
            <Add addTask={addTask} changeProp={changeProp} />
        </div>
    );
}

export default App;
