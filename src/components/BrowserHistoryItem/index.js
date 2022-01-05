import './index.css'
import {Component} from 'react'
import HistroyItem from '../HistoryItem'

class BrowserHistoryItem extends Component {
  state = {
    initialHistoryItems: '',
    searchInput: '',
  }

  updatedHistoryItemsList = (id, initialItems) => {
    const updatedList = initialItems.filter(eachItem => eachItem.id !== id)
    this.setState(prev => ({
      ...prev.initialHistoryItems,
      initialHistoryItems: updatedList,
    }))
  }

  onChangeInput = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {historyList} = this.props
    const {initialHistoryItems, searchInput} = this.state
    const renderList =
      initialHistoryItems === '' ? historyList : initialHistoryItems

    const searchResults = renderList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="app-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              className="search-input"
              placeholder="Search History"
              type="search"
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        {searchResults.length !== 0 ? (
          <ul className="history-items-list">
            {searchResults.map(eachItem => (
              <HistroyItem
                key={eachItem.id}
                histroyItem={eachItem}
                updateHistroyItems={this.updatedHistoryItemsList}
                initialItems={renderList}
              />
            ))}
          </ul>
        ) : (
          <div className="empty-history-container">
            <p className="no-history-text">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default BrowserHistoryItem
// https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png app logo
// https://assets.ccbp.in/frontend/react-js/search-img.png alt should be search
// https://assets.ccbp.in/frontend/react-js/delete-img.png alt should be delete
