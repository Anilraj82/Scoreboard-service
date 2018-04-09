import React, { Component } from 'react';
import {Form} from "./Form";


export class Content1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            score:'',
            order:false,
            playersDetail: [
                {name:'Maria Anders', score:10},
                {name:'Christina Berglund', score:1},
                {name:'Francisco Chang', score:5},
                {name:'Ernst Handel', score:4},
                {name:'Roland Mendel', score:6},
                {name:'Philip Cramer', score:10},
                {name:'Yoshi Tannamuri', score:18},
                {name:'Giovanni Rovelli', score:15},
                {name:'Simon Crowther', score:40},
                {name:'Marie Bertrand', score:80},
                {name:'Helen Bennett', score:14},
            ]
        }
    }

    shortByScore() {
        let order = this.state.order;
        console.log("clicked");
        var data = [...this.state.playersDetail];
        data.sort((a, b) => {
            return ( a.score == b.score ? 0 : (a.score < b.score ? -1 : 1)) * (order ? -1 : 1);
            })
        //console.log("data sorted", data);

        this.setState({
            playersDetail: data,
            order: !order
        })

    }

    handleName = (event) => {
        console.log(event.target.value);

        this.setState({
            name: event.target.value
        })

    }

    handleScore = (event) => {
        console.log(event.target.value);

        this.setState({
            score: event.target.value
        })

    }

    addPlayer = (e) => {
        e.preventDefault();
        let userName = this.state.name;
        let score = this.state.score;

        if (userName === '' || score === ''){
            alert('Please enter both name and score')
        }else{
            let userList = this.state.playersDetail;
            userList.push({name:userName, score:score})

            this.setState({
                playersDetail:userList,
                name:'',
                score:''
            })
        }


    }

    render() {
        console.log("Here comes the detail", this.state.playersDetail);
        //console.log('The value now is', this.state.storeValue);

        return(
            <div className="container">
                <h1>Scoreboard service</h1>
                <Form
                    name={this.state.name}
                    score={this.state.score}
                    handleName={this.handleName}
                    handleScore={this.handleScore}
                    addPlayer={this.addPlayer}
                />
                <br/>
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Players Name</th>
                            <th onClick={() => this.shortByScore()}>Scores</th>
                        </tr>

                        {this.state.playersDetail.map(
                            (item, i) =>
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.score}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>

                <br/>


            </div>
        )
    }

}