// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onFirstButton = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onLasrButton = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="action-btn-container">
          <div className="first-btn-container">
            <button
              type="button"
              className="first-button"
              onClick={this.onFirstButton}
            >
              Show/Hide Firstname
            </button>
            {showFirstName ? <p className="text">Joe</p> : null}
          </div>
          <div className="last-btn-container">
            <button
              type="button"
              className="last-button"
              onClick={this.onLasrButton}
            >
              Show/Hide Lastname
            </button>
            {showLastName ? <p className="text">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
