import React from "react";

export default class FormToDoClass extends React.Component {
  state = {
    list: "",
    newToDo: "",
    clicked: false,
  };

  


  render() {
      const toDos = [];
    const { list, newToDo } = this.state;
    return (
      <div>
        <form onSubmit={(event)=>{
            event.preventDefault();
        }}>
          <fieldset>
            <legend>To Do List</legend>
            <input
              type="text"
              className="list-input"
              value={list}
              onChange={(event) => {
                this.setState({ list: event.target.value });
              }}
            />
            <button
            type="submit"
              className="add-btn"
              onClick={() => {
                this.setState({ newToDo: this.state.list });
                toDos.push(newToDo);
              }}
            >
              Add
            </button>
          </fieldset>
        </form>

        <div className="output">
          {toDos.length
            ? toDos.map((item) => {
                console.log(toDos)
                return (
                  <div
                    className="todo-item"
                    key={Math.floor(Math.random() * 10)}
                  >
                    <p className="items">{item.newToDo}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
