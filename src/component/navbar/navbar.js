import React, { Component } from 'react';
import './navbar.css';
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div onClick={() => this.props.onClickHandle("Popular")}>Popular</div>
                <div onClick={() => this.props.onClickHandle("Latest")}>Latest</div>
                <div href="Oldest" onClick={() => this.props.onClickHandle("Oldest")}>Oldest</div>
                <input onKeyPress={this.props.change} placeholder="Search photos"></input>
            </nav>
        )
    }
}

export default NavBar;