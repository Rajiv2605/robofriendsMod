import React, { Component } from 'react';
import './App.css'
import CardArray from './CardArray';
import Scroll from './Scroll';
import Searchbar from './Searchbar';
import ErrorBoundary from './ErrorBoundary';
import LoadingScreen from './LoadingScreen';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchbar: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({searchbar: event.target.value});
        //console.log(event.target.value);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchbar);
        });
        if(this.state.robots.length === 0)
            return(
                <div>
                    <LoadingScreen />
                </div>
            )
        else {
            const body = document.querySelector("body");
            body.style.background = "linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0, 128, 128, 1) 100%)"

            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <Scroll>
                        <ErrorBoundary>
                            <CardArray robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                    <Searchbar searchChange = {this.onSearchChange} />
                </div>
            );
        }
    }
}

export default App;