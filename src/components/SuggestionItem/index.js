import './index.css'

const SuggestionItem = props => {
  const {suggestion, onFullSuggestion} = props

  const onClickFullSuggestion = () => {
    onFullSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="name">{suggestion}</p>
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickFullSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
