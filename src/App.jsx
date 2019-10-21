import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoTaskList: ['ABCXYZ', 'adadadd'],
      completedTaskList: ['ZYXCBA'],
      taskName: '',
    };
    this.updateToDoTask = this.updateToDoTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    this.setState({ toDoTaskList: [...this.state.toDoTaskList, this.state.taskName] });
  }

  updateToDoTask(event) {
    this.setState({ taskName: event.target.value });
  }

  completeGivenTask(index) {
    const tempToDoTaskList = [...this.state.toDoTaskList];
    const value = tempToDoTaskList[index];
    tempToDoTaskList.splice(index, 1);
    this.setState({toDoTaskList: tempToDoTaskList, completedTaskList: [...this.state.completedTaskList, value]});
  }

  render() {
    const { toDoTaskList, completedTaskList } = this.state;
    return (
      <div className="App">
        <header>
          <div className="header"></div>
        </header>
        <div className="content">
          <div>Tasks</div>
          <div class="add-task">
            <input onChange={this.updateToDoTask} placeholder=" + Add a task"></input>
            <button onClick={this.addTask} className="task-button">Add</button>
          </div>
          <div className="coloumns">
            <span>To-do</span> <span>Completed</span>
          </div>
          <div className="task-list">
            <ul className="task-list-todo">
              {toDoTaskList.map((item, index) => <li>
                {/* <i className="arrow up-arrow"></i> <i className="arrow down-arrow"></i> */}
                <input onClick={() => this.completeGivenTask(index)} type="checkbox"></input><span>{item}</span></li>)
              }
            </ul>
            <ul className="task-list-complete">
              {completedTaskList.map(item => <li>
                {/* <i className="arrow up-arrow"></i> <i className="arrow down-arrow"></i> */}
                <input checked={true} type="checkbox"></input><span>{item}</span></li>)
              }
            </ul>
          </div>
          <div className="bottomDiv"></div>
        </div>
      </div>
    );
  }
}

export default App;
