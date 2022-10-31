import React, { useCallback, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import TaskInput from '../../components/TaskInput/TaskInput';
import { addTask, removeCompletedTasks } from '../TaskList/taskListSlice';
import styles from './Tools.module.css';
import { changeFilter } from './toolsListSlice';
import allImg from "./images/check_box_baseline_nv700_20dp.png";
import activeImg from "./images/check_box_outline_blank_baseline_nv700_20dp.png";
import completedImg from "./images/indeterminate_check_box_baseline_nv700_20dp.png";
import trashCanImg from "./images/delete_baseline_nv700_20dp.png";
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function Tools() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(state => ({
    filter: state.toolsReducer.filter
  }));
  const [title, setTitle] = useState("");

  const callbacks = {
    //onChange для input в форме добавления task -и
    onChange: useCallback((value: string) => {
      setTitle(value);
    }, []),

    //добавление task
    onSubmit: useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addTask({ title, completed: false }));
      setTitle("");
    }, [title]),

    //смена фильтра при клике на фильтр
    changeFilter: useCallback(() => {
      dispatch(changeFilter());
    }, []),

    //удаление сделаных заданий
    removeCompletedTasks: useCallback(() => {
      dispatch(removeCompletedTasks());
    }, [])
  };

  const chooseFilterImg = () => {
    switch (filter) {
      case "all":
        return allImg;
      case "active":
        return activeImg;
      case "completed":
        return completedImg;
    }
  };

  return (
    <div className={styles.tools}>
      <Filter
        onClick={callbacks.changeFilter}
        imgSrc={chooseFilterImg()}
      />
      <TaskInput
        name='title'
        placeholder='what needs to be done?'
        onChange={callbacks.onChange}
        onSubmit={callbacks.onSubmit}
        autofocus={true}
      />
      <Filter
        onClick={callbacks.removeCompletedTasks}
        imgSrc={trashCanImg}
      />
    </div>
  );
}

export default React.memo(Tools);