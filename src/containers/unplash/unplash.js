import React, { Component } from 'react';
import axios from 'axios';
import ListIMG from '../../component/listImg/listImg';
import Navbar from '../../component/navbar/navbar';


class Unplash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listIMG: [],
            page: 1,
            order_by: "latest",
            scrolledToBottom: false,
            innerWidth: window.innerWidth,
            query: "",
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("scroll", this.onScrollHandle);
        axios.get("https://api.unsplash.com/photos?client_id=5a8c57904aa1b541702e3e576e7b12482032a22a4ece5a2d617fd37190e28fe7&per_page=20&order_by=" + this.state.order_by + "&page=" + this.state.page + "")
            .then(response => {
                this.setState({ listIMG: response.data });
            })
            .catch(error => {
                console.log(error)
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.order_by !== prevState.order_by || this.state.page !== prevState.page) {
            axios.get("https://api.unsplash.com/photos?client_id=5a8c57904aa1b541702e3e576e7b12482032a22a4ece5a2d617fd37190e28fe7&per_page=20&order_by=" + this.state.order_by + "&page=" + this.state.page + "")
                .then(response => {
                    this.setState({ listIMG: response.data })
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else if (this.state.scrolledToBottom !== prevState.scrolledToBottom) {
            var pages = this.state.page + 1;
            this.setState({
                page: pages,
                scrolledToBottom: false
            })
        }
        if (this.state.quer !== prevState.query && this.state.query !== "") {
            axios.get("https://api.unsplash.com/search/photos?client_id=f7b0d91da192deaa54b98ad234eac63483c2ea6e687d63e9002cd67f3e7d47b0&per_page=20&page=" + this.state.page + "&query=" + this.state.query + "")
                .then(response => {
                    this.setState({ listIMG: response.data.results })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    componentWillMount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("onscroll", this.onScrollHandle);
    }
    onScrollHandle = () => {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop);
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight);
        var clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            this.setState({
                scrolledToBottom: true
            })
        }
    }
    click = (value) => {
        this.setState({
            order_by: value
        })
    }
    change = (e) => {
        if (e.key === "Enter") {
            this.setState({
                query: e.target.value
            })
        }

    }
    render() {
        return (
            <div>
                <Navbar onClickHandle={this.click} change={this.change} />
                <ListIMG data={this.state.listIMG} />
            </div>
        )
    }
}

export default Unplash;