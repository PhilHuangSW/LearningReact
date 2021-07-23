function getSymbol() {
  const fruits = ["🍊", "🍒", "🍓"];
  return fruits[Math.floor(Math.random() * fruits.length)]
}

class Slots extends React.Component {
  render() {
    let s1 = getSymbol();
    let s2 = getSymbol();
    let s3 = getSymbol();
    let msg;


    if (s1 === s2 && s2 === s3) {
      msg = <h1>Jackpot! You Win!</h1>
    } else {
      msg = <h3>Try Again...</h3>
    }
    return (
      <div>
        <h1>------------------</h1>
        <h3>{s1} - {s2} - {s3}</h3>
        {msg}
        <h1>------------------</h1>
      </div>
    )
  }
}