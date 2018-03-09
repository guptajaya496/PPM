
import React,{Component} from 'react';
import {connect} from "react-redux";
import {fetchHeader} from "../actions";
import {bindActionCreators} from "redux";
import Config from "../config";

class Sidebar extends Component{

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
                <div class="nav-side-menu">
                    <div class="brand">PPM SPECIALITIES</div>
                    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                    <div class="menu-list">

                        <ul id="menu-content" class="menu-content collapse out">

                            <li data-toggle="collapse" data-target="#ppm-surgicals" class="collapsed">
                                <a href="#"><i class="fa fa-heartbeat fa-lg"></i> PPM Surgicals <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="ppm-surgicals">
                                <li>Product's Catalogue</li>
                                <li>Enquiry Form</li>
                            </ul>

                            <li data-toggle="collapse" data-target="#ppm-consultancy" class="collapsed">
                                <a href="#"><i class="fa fa-user fa-lg"></i> PPM Consultancy <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="ppm-consultancy">
                                <li>Consultancy Portfolio</li>
                                <li>Get-in-Touch Form</li>
                            </ul>

                            <li data-toggle="collapse" data-target="#ppm-constructions" class="collapsed">
                                <a href="#">
                                    <i class="fa fa-cubes fa-lg"></i> PPM Constructions <span class="arrow"></span>
                                </a>
                            </li>
                            <ul class="sub-menu collapse" id="ppm-constructions">
                                <li>Civil Construction</li>
                                <li>Architecture & Structural</li>
                                <li>Designs</li>
                                <li>Interior Designing</li>
                                <li>Associate Form</li>
                            </ul>

                            <li data-toggle="collapse" data-target="#ppm-event-management" class="collapsed">
                                <a href="#">
                                    <i class="fa fa-users fa-lg"></i> PPM Event Management <span class="arrow"></span>
                                </a>
                            </li>
                            <ul class="sub-menu collapse" id="ppm-event-management">
                                <li>Services Profile</li>
                                <li>Call Form</li>
                                <li>Designs</li>
                                <li>Interior Designing</li>
                                <li>Associate Form</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                {/*<div className="wrapper">*/}
                    {/*<nav id="sidebar">*/}
                        {/*<div className="sidebar-header">*/}
                            {/*<h3>convertible side bar</h3>*/}
                        {/*</div>*/}

                        {/*<ul className="list-unstyled components">*/}
                            {/*<li className="active"><a href="#">Home</a></li>*/}
                            {/*<li><a href="#">Aboutus</a></li>*/}
                            {/*<li>*/}
                                {/*<a href="#" data-toggle="collapse" aria-expanded="false">Pages</a>*/}
                                {/*<ul class="collapse list-unstyled" id="homeSubmenu">*/}
                                    {/*<li><a href="#">Page</a></li>*/}
                                    {/*<li><a href="#">Page</a></li>*/}
                                    {/*<li><a href="#">Page</a></li>*/}
                                {/*</ul>*/}
                                {/*<li><a href="#">Portfolio</a></li>*/}
                                {/*<li><a href="#">Contact</a></li>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</nav>*/}
                {/*</div>*/}

                {/*<nav className=" navbar-expand-lg bg-color navbar-fixed-top nav " role="navigation">*/}
                    {/*<a className="navbar-brand" href='/'>*/}
                        {/*<img src="../images/PPM.jpg" alt="logo" style={{width:200+'px'}}></img>*/}
                    {/*</a>*/}
                    {/*<div id="navbar" className="navbar navbar-collapse collapse">*/}
                        {/*<ul className="navbar-nav">*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href='/'>*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span> *!/*/}
                                    {/*Home*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href='/managing-directors-message'>*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*Managing Directors's Message*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href='/mission-vision'>*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*Mission & Vision*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href='/about-organization'>*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*About Organization*/}
                                {/*</a>*/}

                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href='/association-scope-portfolio'>*/}
                                    {/*/!*<span className="glyphicon glyphicon-home" aria-hidden="true"></span>*!/*/}
                                    {/*Association & Scope & Portfolio*/}
                                {/*</a>*/}
                            {/*</li>*/}
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
                            {/*<li className="nav-item ">*/}
                                {/*<a className="nav-link" href='/general-rules-regulations'>*/}
                                    {/*/!*<span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> *!/*/}
                                    {/*General Rules & Regulations*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item ">*/}
                                {/*<a className="nav-link" href='/achievementsgallery'>*/}
                                    {/*/!*<span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> *!/*/}
                                    {/*Achievement's Gallery*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href='/contactus'>*/}
                                    {/*/!*<i className="glyphicon glyphicon-envelope white"></i> *!/*/}
                                    {/*Contact Us*/}
                                {/*</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}

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
                {/*</nav>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
