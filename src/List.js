import React from "react";

function List({
    id,
    name,
    done,
    isEdit,
    checker,
    changeEdit,
    changeList,
    deleteTask,
}) {
    return (
        <li key={id}>
            {!isEdit ? (
                <span>{name}</span>
            ) : (
                <input
                    value={name}
                    onChange={(e) => changeList(id, "name", e)}
                    onBlur={() => changeEdit(id)}
                />
            )}{" "}
            <input
                type="checkbox"
                checked={done}
                onChange={(e) => checker(id, e)}
            />{" "}
            Done{" "}
            <button onClick={() => changeEdit(id)}>
                {isEdit ? "Save" : "Edit"}
            </button>{" "}
            <button onClick={() => deleteTask(id)}>Delete</button>
        </li>
    );
}

export default List;
