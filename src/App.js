

import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import { Slider } from 'react-semantic-ui-range'

import './App.css';
import 'semantic-ui-css/semantic.min.css'

function parabolaY(x,a,b,c) {
  return a * x * x + b * x + c
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0, 
      value2: 2,
      value3: 3,
      value: 0
    }
  }

  handleValueChange(e, { value }) {
    this.setState({
      value: value
    })
  }

  render() {
    const data = [{'x-Werte': -5.0,'f(x)-Werte': parabolaY(-5.0, this.state.value1, this.state.value2, this.state.value3)}, 
                  {'x-Werte': -4.0,'f(x)-Werte': parabolaY(-4.0, this.state.value1, this.state.value2, this.state.value3)},
                  {'x-Werte': -3.0,'f(x)-Werte': parabolaY(-3.0, this.state.value1, this.state.value2, this.state.value3)},
                  {'x-Werte': -2.0,'f(x)-Werte': parabolaY(-2.0, this.state.value1, this.state.value2, this.state.value3)},
                  {'x-Werte': -1.0,'f(x)-Werte': parabolaY(-1.0, this.state.value1, this.state.value2, this.state.value3)},
                  {'x-Werte':  0.0,'f(x)-Werte': parabolaY( 0.0, this.state.value1, this.state.value2, this.state.value3)},
                  {'x-Werte':  1.0,'f(x)-Werte': parabolaY( 1.0, this.state.value1, this.state.value2, this.state.value3)},
    ]
    const settings = {
      start: 2,
      min: -1,
      max: 6,
      step: 1,
    }
    return (

      <Grid>

        <Grid.Row style={{marginTop : 20, marginRight: 20, marginLeft: 20, marginBottom: -10}}>
          <Grid.Column width={10}>
            <h2>
              Definition von Quadratischen Funktionen
            </h2>
          </Grid.Column>
          <Grid.Column width={6}>
            <h3 style={{ color: 'blue' }}>params:<br />
              - coefficientx0 = {this.state.value1}<br />
              - coefficientx1 = {this.state.value2}<br />
              - coefficientx2 = {this.state.value3}<br />
            </h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop : 0, marginRight: 20, marginLeft: 20, marginBottom: -10}}>
          <Grid.Column width={16}>
            <span>
              Eine <b>quadratische Funktion oder Parabel</b> wird ganz allgemein
              in der Form <b>f(x) = a * x<sup>2</sup>+ b * x + c</b> dargestellt.
              Dabei haben die Koeffizient a, b und c verschiedene Bedeutungen,
              probiere es einfach etwas aus:
            </span>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{margin: 20}}>
          <Grid.Column width={7}>

          <Segment>
            <h3>
              Koeffizient vor x<sup>2</sup> (<span style={{color: 'orange' }}><u>a</u></span>x<sup>2</sup> + bx + c)  
            </h3>
            <p>
              <Slider color="white" inverted={false}
                settings={{
                  start: this.state.value1,
                  min: -1,
                  max: 6,
                  step: 1,
                  onChange: (value) => {
                    this.setState({
                      value1: value
                    })
                  }
                }} />
            </p>
            <Grid>
              <Grid.Row>
                <Grid.Column width={2}>
                  -1
                </Grid.Column>
                <Grid.Column width={2}>
                  0
                </Grid.Column>
                <Grid.Column width={2}>
                  1
                </Grid.Column>
                <Grid.Column width={2}>
                  2
                </Grid.Column>
                <Grid.Column width={2}>
                  3
                </Grid.Column>
                <Grid.Column width={2}>
                  4
                </Grid.Column>
                <Grid.Column width={2}>
                  5 
                </Grid.Column>
                <Grid.Column width={2}>
                  6
                </Grid.Column>
              </Grid.Row>
            </Grid>
            
          </Segment>
          <Segment>
            <h3>Koeffizient vor x (ax<sup>2</sup> + <span style={{ color: 'orange' }}><u>b</u></span>x + c)</h3>
            <p>
              <Slider color="white" inverted={false}
                settings={{
                  start: this.state.value2,
                  min: -1,
                  max: 6,
                  step: 1,
                  onChange: (value) => {
                    this.setState({
                      value2: value
                    })
                  }
                }} />
            </p>
            <Grid>
              <Grid.Row>
                <Grid.Column width={2}>
                  -1
                </Grid.Column>
                <Grid.Column width={2}>
                  0
                </Grid.Column>
                <Grid.Column width={2}>
                  1
                </Grid.Column>
                <Grid.Column width={2}>
                  2
                </Grid.Column>
                <Grid.Column width={2}>
                  3
                </Grid.Column>
                <Grid.Column width={2}>
                  4
                </Grid.Column>
                <Grid.Column width={2}>
                  5 
                </Grid.Column>
                <Grid.Column width={2}>
                  6
                </Grid.Column>
              </Grid.Row>
            </Grid>
            
          </Segment>
          <Segment>
            <h3>Koeffizient vor 1 (ax<sup>2</sup> + bx + <span style={{ color: 'orange' }}><u>c</u></span>)</h3> 
            <p>
              <Slider color="white" inverted={false}
                settings={{
                  start: this.state.value3,
                  min: -1,
                  max: 6,
                  step: 1,
                  onChange: (value) => {
                    this.setState({
                      value3: value
                    })
                  }
                }} />
            </p>
            <Grid>
              <Grid.Row>
                <Grid.Column width={2}>
                  -1
                </Grid.Column>
                <Grid.Column width={2}>
                  0
                </Grid.Column>
                <Grid.Column width={2}>
                  1
                </Grid.Column>
                <Grid.Column width={2}>
                  2
                </Grid.Column>
                <Grid.Column width={2}>
                  3
                </Grid.Column>
                <Grid.Column width={2}>
                  4
                </Grid.Column>
                <Grid.Column width={2}>
                  5 
                </Grid.Column>
                <Grid.Column width={2}>
                  6
                </Grid.Column>
              </Grid.Row>
            </Grid>
            
          </Segment>

          </Grid.Column >
          <Grid.Column width={9} >
            <LineChart width={600} height={400} data={data} margin={{ top: 20, right: 80, bottom: 20, left: 10 }}>
              <Line type="monotone" dataKey="f(x)-Werte" stroke="green" strokeWidth={2} />
              <XAxis dataKey="x-Werte" label={{ value: "x-Werte", position: 'outsideBottomCenter' }} />
              <YAxis dataKey="f(x)-Werte"  label={{ value: "f(x)-Werte", angle: -90, position: 'outsideLeftCenter' }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <ReferenceLine x={0} stroke="black" strokeWidth={1} />
              <ReferenceLine y={0} stroke="black" strokeWidth={1} />
            </LineChart>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop : -30, marginLeft: 20, marginBottom: 0}}>
          <Grid.Column width={6}>
            <h3 textAlign="left">Funktionsgleichung der Parabel:</h3>
          </Grid.Column>
          <Grid.Column width={10}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop : -5, marginLeft: 40, marginBottom: 5}}>
          <Grid.Column width={6} textAlign="center" color='grey'>
                <h3 style={{ color: 'black' }}>f(x) = <span style={{ color: 'blue' }}>a</span>x<sup>2</sup> + <span style={{ color: 'blue' }}>b</span>x + <span style={{ color: 'blue' }}>c</span></h3>
          </Grid.Column>
          <Grid.Column width={10}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{marginTop : 20, marginRight: 20, marginLeft: 20, marginBottom: 20}} color='yellow'>
          <Grid.Column width={16}>
            <span style={{ color: 'black' }}>
              <b>Merke!</b><br />
                Ist der Koeffizient von x<sup>2</sup> negativ,
                ist die Parabel nach unten geoffnet?
                Ist der Koeffizient von x<sup>2</sup> positiv,
                ist die Parabel nach oben geoffnet?
            </span>     
          </Grid.Column>
        </Grid.Row>

      </Grid>

    );
  }
}

export default App;
