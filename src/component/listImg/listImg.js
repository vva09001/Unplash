import React, { Component } from 'react';
import './listImg.css';
import logo from '../../img/search.svg'
class ListIMG extends Component {

    render() {
        const data = this.props.data.map(value => {
            return (
                <div className="element-wrap" key={value.id}>
                    <div className="element-wrap">
                        <img src={value.urls.small} alt={value.description} />
                        <div >

                        </div>
                        <div className="element-action">
                            <div className="user-wrap">
                                <img className="user" src={value.user.profile_image.small} alt="dowload" />
                                <span>{value.user.username}</span>
                                <a href={value.links.download}>
                                    <div className="download-wrap">
                                        <img className="download" src={logo} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div >
            )
        })
        return (
            <div >
                {data}
            </div>
        )
    }
}
export default ListIMG;