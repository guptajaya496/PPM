
import React,{Component} from 'react';
import {connect} from "react-redux";
import {fetchHeader} from "../actions";
import {bindActionCreators} from "redux";
import Config from "../config";

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            showComponent : false
        }
    }

    componentWillMount(){
        this.props.fetchHeader(Config.CALLFROMHOME);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data){
            let temp = nextProps.data.Header;
            this.setState({showComponent : temp});
        }
    }

    render(){
        return(
            <div>
                <nav className=" navbar-expand-lg bg-color navbar-fixed-top nav " role="navigation">
                    <a className="navbar-brand" href='/'>
                        <img src="../images/PPM.jpg" alt="logo" className="logo"></img>
                    </a>
                    <div id="navbar" className="navbar navbar-collapse collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href='/'>
                                    {/*<span className="glyphicon glyphicon-home" aria-hidden="true"></span> */}
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/managing-directors-message'>
                                    {/*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*/}
                                    Managing Directors's Message
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/mission-vision'>
                                    {/*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*/}
                                    Mission & Vision
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/about-organization'>
                                    {/*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*/}
                                    About Organization
                                </a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/association-scope-portfolio'>
                                    {/*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*/}
                                    Association & Scope & Portfolio
                                </a>
                            </li>
                            {/*<li id="d1" className="dropdown">*/}
                                {/*<a className="dropdown-toggle" href="#" role="button"  data-toggle="dropdown">*/}
                                    {/*/!*<span className="glyphicon glyphicon-list-alt"></span>*!/*/}
                                    {/*PPM Surgicals*/}
                                    {/*/!*<span className="caret"></span>*!/*/}
                                {/*</a>*/}
                                {/*<ul className="dropdown-menu">*/}
                                    {/*<li><a href="#">Product's Catalogue</a></li>*/}
                                    {/*<li><a href="#">Enquiry Form</a></li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}

                            {/*<li className="dropdown">*/}
                                {/*<a className="dropdown-toggle" href="#" role="button"  data-toggle="dropdown">*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*PPM Consultancy*/}
                                {/*</a>*/}
                                {/*<ul className="dropdown-menu">*/}
                                    {/*<li>*/}
                                        {/*<a href="/consultancy-portfolio">Consultancy Portfolio</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>Consultancy Portfolio*!/*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<a href="/get-in-touch-form">Get-in-Touch Form</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}
                            {/*<li className="dropdown">*/}
                                {/*<a className="dropdown-toggle" href="#" role="button"  data-toggle="dropdown">*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*PPM Constructions*/}
                                {/*</a>*/}
                                {/*<ul className="dropdown-menu">*/}
                                    {/*<li>*/}
                                        {/*<a href="/civil-construction">Civil Construction</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>Civil Construction*!/*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<a href="/architectural-structural">Architecture & Structural</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>Architecture & Structural*!/*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<a href="/designs">Designs</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<a href="/interior-design">Interior Designing</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>Interior Designing*!/*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<a href="/associate-form">Associate Form</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>Associate Form*!/*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}
                            {/*<li className="dropdown">*/}
                                {/*<a className="dropdown-toggle" href="#" role="button"  data-toggle="dropdown">*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*PPM Event Management*/}
                                {/*</a>*/}
                                {/*<ul className="dropdown-menu">*/}
                                    {/*<li>*/}
                                        {/*<a href="/services-profile">Services Profile</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>Services Profile*!/*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<a href="/call-form">Call Form</a>*/}
                                        {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>Call Form*!/*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</li>*/}
                            <li className="nav-item ">
                                <a className="nav-link" href='/general-rules-regulations'>
                                    {/*<span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> */}
                                    General Rules & Regulations
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href='/achievementsgallery'>
                                    {/*<span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> */}
                                    Achievement's Gallery
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/contactus'>
                                    {/*<i className="glyphicon glyphicon-envelope white"></i> */}
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/*<div className="navbar navbar-collapse collapse">*/}
                        {/*{*/}
                            {/*(this.state.showComponent) ?*/}
                                {/*<ul className="navbar-nav ">*/}

                                    {/*<li className="nav-item">*/}
                                        {/*<span className="nav-link"> Welcome, User </span>*/}
                                    {/*</li>*/}

                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link" href='/logout'>*/}
                                            {/*<span className="glyphicon glyphicon-log-in" aria-hidden="true"></span> Logout*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                                {/*:*/}
                                {/*<ul className="navbar-nav ">*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link " href='/login'>*/}
                                            {/*<span className="glyphicon glyphicon-log-in" aria-hidden="true"></span> Login*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link ">*/}
                                        {/*/*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link " href='/register'>*/}
                                            {/*<span className="glyphicon glyphicon-log-in" aria-hidden="true"></span> Register*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                        {/*}*/}
                    {/*</div>*/}
                </nav>
                {/*<header className="jumbotron ">*/}
                    {/*<div className="container">*/}
                        {/*<div className="row row-header">*/}
                            {/*<div className="col-xs-12 col-sm-8 headingLogo">*/}
                                {/*<h1>Books R Friends</h1>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</header>*/}
            </div>
        );
    }
}

function  mapStateToProps(state){
    return {
        data : state
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchHeader
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
