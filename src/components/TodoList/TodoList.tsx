import React from 'react';
import type { Todo } from '../../types/Todo';

type Props = {
  todosData: Todo[];
  popup: (value: boolean) => void;
  todoId: (value: number) => void;
  slash: number;
  switchModeModal: boolean;
};

export const TodoList: React.FC<Props> = ({
  todosData,
  popup,
  todoId,
  slash,
  switchModeModal,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todosData.map(todo => (
        <tr data-cy="todo" className="" key={todo.id}>
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>

          <td className="is-vcentered is-expanded">
            <p
              className={
                todo.completed ? 'has-text-success' : 'has-text-danger'
              }
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => popup(true)}
            >
              <span className="icon">
                <i
                  className={
                    todo.id === slash && switchModeModal
                      ? 'far fa-eye-slash'
                      : 'far fa-eye'
                  }
                  onClick={() => todoId(todo.id)}
                />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
