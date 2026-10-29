import { Component } from 'react';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {content: 'Just some demo tasks', isEditing: false},
        {content: 'As an example', isEditing: false},
      ],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({
        content: state.inputVal,
        isEditing: false
    }),
      inputVal: '',
    }));
  }

  // Add a new delete button
  deleteTodo(indexToDelete) {
    this.setState((state) => ({
      todos: state.todos.filter((_, index) => index !== indexToDelete)
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo.content}
              <button 
                type='button' 
                className='delete-btn'
                onClick={() => this.deleteTodo(index)}>
                  X
              </button>

              <button
                type='button'
                className='edit-btn'
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
        <Count todos={this.state.todos}/>
      </section>
    );
  }
}

class Count extends Component {
  render() {
    return (
      <p>Your Task Count: {this.props.todos.length}</p>
    )
  }
}

export default ClassInput;
