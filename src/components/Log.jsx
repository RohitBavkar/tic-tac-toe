function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          Player {turn.player} moved to {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
