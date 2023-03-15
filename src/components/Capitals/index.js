import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].id}

  onClickCapital = event => {
    this.setState({id: event.target.value})
  }

  render() {
    const {id} = this.state
    const countryForId = countryAndCapitalsList.find(
      eachCity => eachCity.id === id,
    )
    const {country} = countryForId

    return (
      <div className="appContainer">
        <div className="cardContainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="inputContainer">
            <select value={id} className="input" onChange={this.onClickCapital}>
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
