import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            hyva : 0,
            neutraali : 0,
            huono: 0,
            kaikki: []

        }
    }

    klikHyva = () => {
       this.setState({
           hyva: this.state.hyva + 1,
           kaikki: this.state.kaikki.concat(1)
       })
    }

    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            kaikki: this.state.kaikki.concat(0)
        })
    }

    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            kaikki: this.state.kaikki.concat(-1)
        })
    }

    render() {
       const positiivinen = () => {
           let laskuri = 0
         this.state.kaikki.forEach((luku) => {

            if (luku == 1) {
                laskuri ++
            }
         })
         
         return (
            laskuri/this.state.kaikki.length
         )
       }
       const keskiarvo = () => {
        let laskuri = 0
      this.state.kaikki.forEach((luku) => {


         laskuri = laskuri + luku
      })
      
      return (
         laskuri/this.state.kaikki.length
      )
    }
        return  (
            
            <div>
                <h1>Anna palautetta</h1>
              <div>
              <button onClick={this.klikHyva}>hyva</button>
              <button onClick={this.klikNeutraali}>neutraali</button>
              <button onClick={this.klikHuono}>huono</button>
              </div>
              <h1>Statistiikka</h1>
              <div>
              <p>Hyvä: {this.state.hyva}</p>
              <p>Neutraali: {this.state.neutraali}</p>
              <p>Huono: {this.state.huono}</p>
              <div>Positiivisia: { 100 * positiivinen() + ' %'}</div>
              <div>Keskiarvo: {keskiarvo()}</div>
              </div>
            </div>
          )
      }
  
}

const Statistic = (props) => {
  
    return (
        <div>
            <p>{props.kaikki}</p>
            </div>
    )
    
}

const Statistics = (props) => {

    return (
        <div>
            <Statistic kaikki={props.kaikki}/>
            </div>
    )
}

  const Button = (props) => (
    <button onClick={props.handleClick}>
    </button>
  )

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )