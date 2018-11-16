import React, { Component } from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Division from './Division.js';
import Multiplication from './Multiplication';

import './Calc.css';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            result: 0
        };

        this.changeA = this.changeA.bind(this);
        this.changeB = this.changeB.bind(this);
        this.CalcFunction = this.CalcFunction.bind(this);
    }

    changeA(event) {
        this.setState({a: event.target.value});
        // this.setState({value: event.target.value});
        console.log(event.target.value)
    }

    changeB(event) {
        this.setState({b: event.target.value});
    }

    CalcFunction(fun){
        let numbers = {
            a: +this.state.a,
            b: +this.state.b
        }
        this.setState({result: <fun val={numbers}/>
        });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
    <label>
        a:
    <input type="text" className="calc-elem number"  onChange={this.changeA} />
        </label>
        <label>
        b:
    <input type="text" className="calc-elem number"  onChange={this.changeB} />
        </label>
        <input type="button" onClick={this.CalcFunction("Addition")} className="calc-elem btn" value="+" />
            <input type="button" onClick={this.CalcFunction("Subtraction")} className="calc-elem btn" value="-" />
            <input type="button" onClick={this.CalcFunction("Division")} className="calc-elem btn" value="/" />
            <input type="button" onClick={this.CalcFunction("Multiplication")} className="calc-elem btn" value="*" />
            </form>
            <div>Result: {this.state.result}</div>
        </div>
    );
    }
}

export default Calc;
