

const getNum = () => {
  return (Math.floor(Math.random() * 10) + 1);
}

const num = getNum();

var msg;

if (num === 7) {
  msg =
    <div>
      <h2>Congrats!</h2>
      <img src="https://media.tenor.com/images/8b906728d6f1f199155e2dd64ec5dc48/tenor.gif" />
    </div>
} else {
  msg = <p>Sorry about that...</p>
}

class NumPicker extends React.Component {
  render() {
    return (
      <div>
        <h1>Your number is: {num}</h1>
        {msg}
      </div>
    )
  }
}