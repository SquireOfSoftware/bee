import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeid: 0
    };
  }

  componentDidMount() {
    this.gameLoop();
  }

  gameLoop() {
    let timeoutId = setTimeout(() => {
      if (!this.state.isGameOver) {
        this.updateQueen();
        this.updateWorkers();
        this.setState({ directionChanged: false })
      }

      this.gameLoop()
    }, this.state.gameLoopTimeout)

    this.setState({ timeoutId })
  }

  updateQueen() {
    console.log("Updating the queen");
  }

  updateWorkers() {
    console.log("Updating the workers");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Bee</div>
        </header>
      </div>
    );
  }
}

export default App;
