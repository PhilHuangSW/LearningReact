

class Hello extends React.Component {
  render() {
    const { to, from } = this.props;
    return (
      <div>
        <h1>Hello {to}!</h1>
        <h3>From, {from}</h3>
      </div>
    )
  }
}
