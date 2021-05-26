import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("hello")

  }
  state = {
    count : 0
  }
  add = () => {
  console.log("add")
  this.setState(current => ({count : current.count + 1}))
  }
  minus = () => {
  console.log("minus")
  this.setState(current => ({count : current.count - 1}))
  }

  componentDidMount() {
    console.log("component renderd")
  }

  componentDidUpdate(){
    console.log("i ll update renderd")
  }
  
  componentWillUnmount(){
    console.log("goodbye, react")
  }
  render(){
    console.log("I m rendering")
    return <div>
      <h1>
        제 점수는 : {this.state.count}
      </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }

}

export default App;
