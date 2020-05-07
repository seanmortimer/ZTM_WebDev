import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({ robots: users })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        return !robots.length ?
            <h1 className='tc'>Loading... Your friends will be here soon!</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>My Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;