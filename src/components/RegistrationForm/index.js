import {Component} from 'react'
import './index.css'

export default class RegistrationForm extends Component {
  state = {
    isSubmitted: false,
    firstName: '',
    lastName: '',
    para1: '',
    para2: '',
  }

  handleBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({para1: 'Required'})
    } else {
      this.setState({para1: ''})
    }
  }

  handleBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({para2: 'Required'})
    } else {
      this.setState({para2: ''})
    }
  }

  getFirstName = e => {
    this.setState({firstName: e.target.value})
  }

  getLastName = e => {
    this.setState({lastName: e.target.value})
  }

  checkFormStatus = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') this.setState({isSubmitted: true})
  }

  onSubmitForm = e => {
    const {firstName, lastName} = this.state
    e.preventDefault()
    this.handleBlurFirstName()
    this.handleBlurLastName()
    this.checkFormStatus()

    if (firstName === '' && lastName === '') {
      this.setState({
        isSubmitted: false,
      })
    } else {
      this.setState({
        isSubmitted: true,
      })
    }
  }

  anotherResponse = () => {
    this.setState({isSubmitted: false})
  }

  render() {
    const {para1, para2, isSubmitted} = this.state
    console.log(isSubmitted)
    return (
      <div className="container">
        <h1>Registration</h1>
        {isSubmitted ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="img"
            />
            <p>Submitted Successfully</p>
            <button onClick={this.anotherResponse} type="button">
              Submit Another Response
            </button>
          </div>
        ) : (
          <form>
            <label htmlFor="firstName">FIRST NAME</label>
            <br />
            <input
              onBlur={this.handleBlurFirstName}
              onChange={this.getFirstName}
              id="firstName"
              type="text"
              placeholder="First name"
            />
            <p className="para1">{para1}</p>
            <label htmlFor="lastName">LAST NAME</label>
            <br />
            <input
              onChange={this.getLastName}
              onBlur={this.handleBlurLastName}
              id="lastName"
              type="text"
              placeholder="Last name"
            />
            <p className="para1">{para2}</p>
            <button type="submit" onClick={this.onSubmitForm}>
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
