import React, {Component} from 'react'
//import logo from './logo.svg';
import Header from './components/Header'
import TodoList from './components/TodoList'
import SubmitForm from './components/SubmitForm'
import './App.css';

class App extends Component {
  state = {
    header: 'My Todo List',
    tasks: ['task 1', 'task 2', 'task 3', 'task 4', 'task 5' ]
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks]
    newArr.splice(index, 1)
    this.setState({tasks: newArr})
  }

  handleSubmit = task => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList
            tasks={this.state.tasks}
            onDelete={this.handleDelete}
          />
          <SubmitForm onFormSubmit={this.handleSubmit} />
          {/* <h2>{this.state.header}</h2> */}
        </div>
      </div>
    )
  }
}

export default App;


// eslint-disable-next-line
{/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/}
