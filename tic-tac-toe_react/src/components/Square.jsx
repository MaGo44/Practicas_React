import PropTypes from 'prop-types';

const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected': ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isSelected: PropTypes.string.isRequired,
  updateBoard: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  index: PropTypes.number.isRequired,
};

export default Square;