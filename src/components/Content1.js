import React, { Component } from 'react';


export class Content1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameVal:'',
            scoreVal:'',
            value: '',
            storeValue:[],
            playersdetail: [
                {name:'Maria Anders', score:10},
                {name:'Christina Berglund', score:1},
                {name:'Francisco Chang', score:5},
                {name:'Ernst Handel', score:10},
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
        console.log("clicked");
        var data = [...this.state.playersdetail];
        data.sort((a, b) => (a['score'] - b['score']));
        console.log("data sorted", data);

        this.setState({
            playersdetail: data
        })

    }

    handleName = (event) => {
        console.log(event.target.value);

        this.setState({
            nameVal: event.target.value
        })

    }

    handleScore = (event) => {
        console.log(event.target.value);

        this.setState({
            scoreVal: event.target.value
        })

    }

    addPlayer = () => {
        let Value1 = this.state.value;
        let Value2 = this.state.storeValue;
        Value2.push(Value1);

        this.setState({
            value: ''
        })

    }

    render() {
        console.log("Here comes the detail", this.state.playersdetail);
        console.log('The value now is', this.state.storeValue);

        return(
            <div>
                <h1>Scoreboard service</h1>
                <table id="customers">
                    <tr>
                        <th>#id</th>
                        <th>Players Name</th>
                        <th onClick={() => this.shortByScore()}>Scores</th>
                    </tr>

                    {this.state.playersdetail.map(
                        (item, i) =>
                            <tr>
                                <td>{item[i]}</td>
                                <td key={i}>{item.name}</td>
                                <td key={i}>{item.score}</td>
                            </tr>
                        )
                    }
                </table>

                <br/>
                <form style={{backgroundColor:'grey', color:'white'}}>
                    <h2>Lets add some other players scores as well.</h2>

                    <label>
                        Name: <input type='text' placeholder="Enter name" value={this.state.nameVal} onChange={this.handleName}/>
                        Score: <input type='number' value={this.state.scoreVal} onChange={this.handleScore} />
                    </label>
                    <input type="submit" onClick={this.addPlayer} value="Submit" />
                </form>

                <div>
                    {
                        this.state.storeValue.length > 0 &&
                            <div>
                                <h2>The entered players are: </h2>
                                <ul>
                                    {this.state.storeValue.map(item => <li>{item}</li>)}
                                </ul>
                            </div>
                    }
                </div>

            </div>
        )
    }

}