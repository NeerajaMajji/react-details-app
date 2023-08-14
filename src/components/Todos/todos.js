import './todos.css'
const ToDos = (props) => {
    const { todoDetails, doDelete } = props;
    const { id, title } = todoDetails;
    
    const onDelete = () => {
      doDelete(id);
    };
  
    return (
      <div className="todos-container">
        <p className="title-block">{title}</p>
        <button onClick={onDelete} className="delete-btn">
          Delete
        </button>
      </div>
    );
  };
  
  export default ToDos;