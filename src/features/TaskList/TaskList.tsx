import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import List from '../../components/AnimatedList/AnimatedList';
import TaskItem from '../../components/TaskItem/TaskItem';
import styles from './TaskList.module.css';
import { markTask, Task } from './taskListSlice';

function TaskList() {
  const dispatch = useAppDispatch();
  const { items, filter } = useAppSelector(state => ({
    items: state.taskListReducer.tasks,
    filter: state.toolsReducer.filter
  }));

  const callbacks = {
    //пометить задачу как завершенную и наоборот
    markTask: useCallback((code: string) => {
      dispatch(markTask(code));
    }, [])
  };

  const renders = {
    taskItem: useCallback((item: Task) => (
      <TaskItem
        task={item}
        onClick={callbacks.markTask}
      />
    ), [])
  };

  const chooseItems = () => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => item.completed === false);
      case "completed":
        return items.filter(item => item.completed === true);
    }
  };

  return (
    <div role={"list"} className={styles.taskList}>
      <List items={chooseItems()} renderItem={renders.taskItem} />
    </div>
  );
}

export default React.memo(TaskList);