import React from 'react';
import './AnimatedList.css';
import { Task } from '../../features/TaskList/taskListSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function List({ renderItem = (i: any) => i.toString(), ...props }: ListProps) {

  return (
    <TransitionGroup component="div" className="list">{props.items.map(item =>
      <CSSTransition key={item.code}
        classNames="ani"
        timeout={500}
      >
        <div>
          {renderItem(item)}
        </div>
      </CSSTransition>
    )}
    </TransitionGroup>
  );
}

interface ListProps {
  items: Task[],
  renderItem?: (item: ListProps["items"][number]) => JSX.Element
}

export default React.memo(List);
