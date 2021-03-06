import React, {Component} from 'react'

export default class TodoItem extends Component {
  handleBodyClick = e => {
    const newBody = prompt('Enter new sentence which want to modify')
    const {id, onBodyUpdate} = this.props
    onBodyUpdate(id, newBody)
  }
  
  render() {
    const {id, body, complete, onComplete, onDelete} = this.props
    return (
      <li className={complete ? 'todoList done' : 'todoList'} key={id}>
        {complete ? <button disabled className="btn__done">Done</button> : <button className="btn__done complete" onClick={e => { onComplete(id) }}>Done</button>}
        {complete ? <span className='todoBody done'>{body}</span> : <span className='todoBody' onClick={this.handleBodyClick}>{ body }</span>}
        <button className="btn__delete" onClick={e => { onDelete(id) }}>Delete</button>
      </li>
    )
  }
}