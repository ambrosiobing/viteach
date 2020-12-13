import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: -1,
    label: '1',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

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
            <h3>
              Definition von Quadratischen Funktionen
            </h3>
          </Grid.Column>
          <Grid.Column width={6}>
            <h4 style={{ color: 'blue' }}>params:<br />
              - coefficientx0 = {this.state.value1}<br />
              - coefficientx1 = {this.state.value2}<br />
              - coefficientx2 = {this.state.value3}<br />
            </h4>
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
          <Grid.Column width={6}>

          <Segment>
            <span>
              <b>Koeffizient vor x<sup>2</sup> (<span style={{color: 'orange' }}><u>a</u></span>x<sup>2</sup> + bx + c)</b>
            </span>
            <p>
              <Typography id="discrete-slider-custom" gutterBottom style={{ color: grey[400], marginBottom: -20, marginTop: -20}}>
                <h6>Hiermit kannst du die Form und Richtung der Öffnung der Parabel steuern</h6>
              </Typography>
              <Slider style={{ color: grey[400] }}
                defaultValue={this.state.value1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={-1}
                max={5}  
                onChange={ (e, value) =>  
                  this.setState({
                    value1: value
                  })
                }
              />
            </p>
            
          </Segment>
          <Segment>
            <span><b>Koeffizient vor x (ax<sup>2</sup> + <span style={{ color: 'orange' }}><u>b</u></span>x + c)</b></span>
            <p>
            <Typography id="discrete-slider-custom" gutterBottom style={{ color: grey[400], marginBottom: -20, marginTop: -20 }}>
                <h6>Hiermit kannst du die Form der Parabeln ändern</h6>
              </Typography>
              <Slider style={{ color: grey[400] }}
                defaultValue={this.state.value2}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={-1}
                max={5}  
                onChange={ (e, value) =>  
                  this.setState({
                    value2: value
                  })
                }
              />
            </p>
            
          </Segment>
          <Segment>
            <span><b>Koeffizient vor 1 (ax<sup>2</sup> + bx + <span style={{ color: 'orange' }}><u>c</u></span>)</b></span> 
            <p>
            <Typography id="discrete-slider-custom" gutterBottom style={{ color: grey[400], marginBottom: -20, marginTop: -20 }}>
                <h6>Hiermit kannst du die Höhe der Parabel steuern</h6>
              </Typography>
              <Slider style={{ color: grey[400] }}
                defaultValue={this.state.value3}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                min={-1}
                max={5}  
                onChange={ (e, value) =>  
                  this.setState({
                    value3: value
                  })
                }
              />
            </p>            
          </Segment>

          </Grid.Column >
          <Grid.Column width={10} >
            <LineChart width={400} height={300} data={data} margin={{ top: 20, right: 80, bottom: 20, left: 10 }}>
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
          <Grid.Column width={7}>
            <span textAlign="left">Funktionsgleichung der Parabel:</span>
          </Grid.Column>
          <Grid.Column width={10}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop : -5, marginLeft: 40, marginBottom: 5}}>
          <Grid.Column width={6} textAlign="center" color='grey'>
                <span style={{ color: 'black' }}>f(x) = <span style={{ color: 'blue' }}>a</span>x<sup>2</sup> + <span style={{ color: 'blue' }}>b</span>x + <span style={{ color: 'blue' }}>c</span></span>
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
