import './App.css'

import {Component} from 'react'

import HistoryList from './components/HistoryList'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryListDetails extends Component {
  state = {
    searchHistory: '',
    historyList: initialHistoryList,
  }

  onChangeSearchHistory = event => {
    this.setState({searchHistory: event.target.value})
  }

  onDeleteHistoryItem = id => {
    const {historyList} = this.state
    const filteredSearchHistory = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyList: filteredSearchHistory})
  }

  render() {
    const {searchHistory, historyList} = this.state
    const searchResults = historyList.filter(eachHistory =>
      eachHistory.title.includes(searchHistory),
    )

    return (
      <div className="bg-container">
        <div className="navbar-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt=" app logo"
              className="app-logo"
            />
          </div>
          <p className="search-log-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-logo"
              alt="search-icon"
            />
          </p>
          <input
            type="search"
            className="search-input"
            placeholder="Search history"
            value={searchHistory}
            onChange={this.onChangeSearchHistory}
          />
          <div className="history-list-container">
            {searchResults.length > 0 ? (
              <ul className="list-container">
                {searchResults.map(eachHistory => (
                  <HistoryList
                    onDeleteHistoryItem={this.onDeleteHistory}
                    searchHistoryDetails={eachHistory}
                    key={eachHistory.id}
                  />
                ))}
              </ul>
            ) : (
              <p className="empty-list-history">There is no history to show</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryListDetails
