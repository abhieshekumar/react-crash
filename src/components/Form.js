import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: '', //controls value of text
       comments: '',
       topic: 'react'
    }
  }


  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentChange = (event) => {
    this.setState({
      comments : event.target.value
    })
  }

  handleTopicChange = (event) => {
    this.setState({
      topic : event.target.value
    })
  }
  
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault() //Stops page from refreshing
  }

  render() {

    const {username, comments, topic }= this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          {/* Add HTML
              Assign component state to element value
              Define a onChange event Handler to update the state
           */}
          <input type='text' value={username} onChange={this.handlerUsernameChange}/>
          <br></br>
           <textarea value={comments} onChange={this.handleCommentChange}></textarea>
           <div>
             <label>Topic</label>
             <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
             </select>
           </div>
           {
             /*A common approach is JS function to handle Submission fo you*/
           }
           <button type='Submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
