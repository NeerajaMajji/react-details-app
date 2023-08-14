import './todos.css'
import ToDos from './todos';
import { useState } from 'react';
const TodoList=[
    {
        id: 1,
        title: 'Book the ticket for today evening',
      },
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
      },
      {
        id: 6,
        title: 'Fix the production issue',
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
      },
]

    const ToDoList = (props) => {
        const [todosList, setTodosList] = useState(TodoList); // Assuming TodoList is defined
  const doDelete = (id) => {
    const updatedTodosList = todosList.filter((eachTodo) => eachTodo.id !== id);
    setTodosList(updatedTodosList);
  };

  return (
    <div className="whole-container">
      <h1>Simple Todos</h1>
      <ul>
        {todosList.map((each) => (
          <ToDos todoDetails={each} doDelete={doDelete} key={each.id} />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList