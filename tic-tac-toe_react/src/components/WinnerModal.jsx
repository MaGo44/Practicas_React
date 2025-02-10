import Square from "./Square"
import PropTypes from 'prop-types';

export function WinnerModal( { winner, resetGame } ) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : `Ganador:`
  return (
        <section className="winner">
          <div>
            <h2>
              { winnerText }
            </h2>

            <header className="win">
              {winner && <Square> {winner} </Square>}
            </header>
            <footer>
              <button onClick={resetGame}>
                Empezar de nuevo
              </button>
            </footer>
          </div>
        </section>
  )
}

WinnerModal.propTypes = {
  winner: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired,
};