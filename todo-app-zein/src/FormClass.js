import React from "react";

export default class FormToDoClass extends React.Component {
  state = {
    list: "",
    clicked: false,
  };

  //   handleDeleteBtn = () => {
  //     this.setState({clicked: true});
  //   }

  handleInput = (event) => {
    this.setState({ list: event.target.value });
  };

  toDos = [];
  render() {
    const { list /*clicked*/ } = this.state;
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.toDos.push(list);
            console.log(this.toDos);
          }}
        >
          <fieldset>
            <legend>To Do List</legend>
            <input
              type="text"
              className="list-input"
              value={list}
              onChange={this.handleInput}
            />
            <input type="submit" className="add-btn" />
          </fieldset>
        </form>

        <div className="output">
          {this.toDos.length > 0
            ? this.toDos.map((item) => {
                return (
                  <div key={Math.random() * 10}>
                    <p>{item}</p>
                    {/* <button onClick={this.handleDeleteBtn}>delete</button> */}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
