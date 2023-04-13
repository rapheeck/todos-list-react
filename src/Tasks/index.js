import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`tasks__item ${task.done && props.hideDone ? "tasks__item--hidden" : ""}`}>
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✔️" : ""}
                </button>
                <span className={`tasks_content ${task.done ? "tasks__content--done" : ""}`}>
                    {task.content} </span>
                <button class="tasks_button tasks__button--remove">❌</button>
            </li >
        ))}
    </ul >
);

export default Tasks;