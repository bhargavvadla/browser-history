import './index.css'

const HistoryItem = props => {
  const {histroyItem, updateHistroyItems, initialItems} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = histroyItem
  const onDeleteItem = () => {
    updateHistroyItems(id, initialItems)
  }
  return (
    <li className="history-item">
      <p className="history-time">{timeAccessed}</p>
      <div className="history-item-container">
        <div className="history-item-text-image">
          <img src={logoUrl} alt="domain logo" className="item-img" />
          <div className="history-domain-container">
            <p className="domain-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button type="button" className="delete-btn" testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
            onClick={onDeleteItem}
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
