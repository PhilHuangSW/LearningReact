class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello to="World" from="Phil" /> */}
        {/* <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} /> */}
        {/* <Hello to="Phil" from="Rain" /> */}
        {/* <NumPicker /> */}
        {/* <SlotMachine
          s1="🍊"
          s2="🍒"
          s3="🍓"
        />
        <SlotMachine
          s1="🍒"
          s2="🍒"
          s3="🍒"
        />
        <SlotMachine
          s1="🍒"
          s2="🍒"
          s3="🍓"
        /> */}
        <Slots />
        <Slots />
        <Slots />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));