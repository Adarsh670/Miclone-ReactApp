import React from 'react'
import { Link } from 'react-router-dom'
const Footer = ({ footer }) => {
    return (
        <div>
            <div className='container-fluid footer'>
                <div className="support">
                    <h6>SUPPORT</h6>
                    <ul>
                        {
                            footer.support.map((items) => {
                                return (
                                    <li><a href="{items.url}">{items.name}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="shopandlearn">
                    <h6>SHOP AND LEARN</h6>
                    <ul>
                        {
                            footer.shopAndLearn.map((items) => {
                                return (
                                    <li><a href="{items.url}">{items.name}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="ratailstore">
                    <h6>RETAIL STORE</h6>
                    <ul>
                        {
                            footer.retailStore.map((items) => {
                                return (
                                    <li><a href="{items.url}">{items.name}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="about">
                    <h6>ABOUT US</h6>
                    <ul>
                        {
                            footer.aboutUS.map((items) => {
                                return (
                                    <li><a href="{items.url}">{items.name}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="contactus">
                    <h6>CONTACT US</h6>
                    <ul>
                        {
                            footer.contactUs
                                .map((items) => {
                                    return (
                                        <li><a href="{items.url}">{items.name}</a></li>
                                    )
                                })
                        }
                    </ul>
                </div>
                <div className="chat">
                    <h6>Chat with our Virtual AI</h6>
                    <p>Bot(24/7 Live Agent Support) </p>
                    <button>CHAT NOW</button>
                </div>
            </div>

            {/* Mobile Footer */}
            <div className="container-fluid mobilefooter">
                <div className="row">
                    <div className="col-12 ">
                        <h6>SUPPORT</h6>
                        {
                            footer.support
                                .map((items) => {
                                    return (
                                        <>
                                            <Link to={items.url}>{items.name}</Link><span>|</span>
                                        </>
                                    )
                                })
                        }
                    </div>
                    <div className="col-12 mt-5">
                        <h6>SHOP & LEARN</h6>
                        {
                            footer.shopAndLearn
                                .map((items) => {
                                    return (
                                        <>
                                            <Link to='/'>{items.name}</Link><span>|</span>
                                        </>
                                    )
                                })
                        }
                    </div>
                    <div className="col-12 mt-5">
                        <h6>RETAIL STORE</h6>
                        {
                            footer.retailStore
                                .map((items) => {
                                    return (
                                        <>
                                            <Link to='/'>{items.name}</Link><span>|</span>
                                        </>
                                    )
                                })
                        }
                    </div>
                    <div className="col-12 mt-5">
                        <h6>ABOUT US</h6>
                        {
                            footer.aboutUS
                                .map((items) => {
                                    return (
                                        <>
                                            <Link to='/'>{items.name}</Link><span>|</span>
                                        </>
                                    )
                                })
                        }
                    </div>
                    <div className="col-12 mt-5">
                        <h6>CONTACT US</h6>
                        {
                            footer.contactUs
                                .map((items) => {
                                    return (
                                        <>
                                            <Link to='/'>{items.name}</Link><span>|</span>
                                        </>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer