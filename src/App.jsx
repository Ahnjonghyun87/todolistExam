import { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const onClick = () => {
    if (!title.trim() || !description.trim()) {
      alert("내용을 입력해주세요");
      return;
    }
    const newValue = { title, description, id: Date.now, isDone: false };

    setTodos((prev) => {
      return [...prev, newValue];
    });
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onDeleteTodo = (deleteId) => {
    // setTodos((todos) => {
    //   return todos.filter => deleteId !== id
    // })
  };
  const onChangeTodoState = (targetId) => {
    setTodos((todos) => {
      // return todos.map(())
    });
  };

  return (
    <div className="App">
      <div className="header">
        <div>todolist</div>
        <div>react</div>
      </div>

      <div className="form-container">
        <input
          type="text"
          placeholder="제목"
          onClick={() => onChangeTitle}
          value={title}
        />
        <input
          type="text"
          placeholder="내용"
          onClick={() => onChangeDescription}
          value={description}
        />
        <div>
          {todos.map(({ title, description, isDone, id }) => {
            return <div key={id}>{title}</div>;
          })}
        </div>
        <button onClick={onClick}>추가하기</button>
      </div>

      <div className="progress-container">
        <div>working....</div>
        <ul className="todos">
          {todos.map(({ title, description, isDone, id }) => {
            return (
              <li className="todosCard" key={id}>
                <div>{title}</div>
                <div>{description}</div>
                <button onClick={() => onDeleteTodo(id)}>삭제하기</button>
                <button onClick={() => onChangeTodoState(id)}>완료</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-container">
        <div>done....</div>
        <ul className="todos">
          {todos.map(({ title, description, isDone, id }) => {
            return (
              <li className="todosCard" key={id}>
                <div>{title}</div>
                <div>{description}</div>
                <button onClick={() => onDeleteTodo(id)}>삭제하기</button>
                <button onClick={() => onChangeTodoState(id)}>완료</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
