import React, { Component } from 'react';


export class Form extends Component {
    render() {
        return(
            <div>
                <form>
                    <h2>Lets add some other players scores as well.</h2>

                    <label>
                        Name: <input required type='text' placeholder="Enter name" value={this.props.name} onChange={this.props.handleName}/>
                    </label>
                    <label style={{marginLeft:'20px', marginRight:'20px'}}>
                        Score: <input required  type='number' placeholder="Enter score" value={this.props.score} onChange={this.props.handleScore} />
                    </label>
                    <button type="submit" onClick={this.props.addPlayer}>Submit</button>
                </form>
            </div>
        )
    }

}