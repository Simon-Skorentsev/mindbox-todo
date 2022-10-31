import React, { useCallback } from "react";
import cn from 'classnames';
import styles from "./TaskItem.module.css";
import { Task } from "../../features/TaskList/taskListSlice";

function TaskItem({ onClick = () => { return; }, ...props }: TaskItemProps) {

    const callbacks = {
        onClick: useCallback(() => {
            onClick(props.task.code);
        }, [])
    };

    return (
        <div className={cn(styles.wrapper,
            { [styles.selected]: props.task.completed })}
            onClick={callbacks.onClick}>
            <div>{props.task.title}</div>
        </div>
    );
}

interface TaskItemProps {
    task: Task,
    onClick?: (code: string) => void
}

export default React.memo(TaskItem);