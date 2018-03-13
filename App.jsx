
import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './reducers/index';

//Components
import Home from './components/home.jsx';
import AboutOrganization from './components/aboutorganization.jsx';
import AchievementGallery from './components/achievement-gallery.jsx';
import ArchitecturalStructural from './components/architectural-structural.jsx';
import ContactUs from './components/contactus.jsx';
import User from './components/user.jsx';
import Footer from './components/footer.jsx';
import AssociateForm from './components/associateform.jsx';
import AssociationScopePortfolio from './components/association-scope-portfolio.jsx';
import CallFrom from './components/call-form.jsx';
import CivilConstruction from './components/civilconstruction.jsx';
import ConsultancyPortfolio from './components/consultancyportfolio.jsx';
import Designs from './components/designs.jsx';
import EnquiryForm from "./components/enquiryform.jsx";
import GeneralRulesRegulations from './components/general-rules-regulations.jsx';
import GetinTouch from './components/get-in-touchform.jsx';
import InteriorDesigns from './components/interior-designs.jsx';
import ManagingDirectorsMessage from './components/managing-directors-message.jsx';
import MissionVision from './components/mission-vision.jsx';
import PPMEventManagement from './components/ppm-event-management.jsx';
import PPMConstructions from './components/ppmconstructions.jsx';
import PPMConsultancy from './components/ppmconsultancy.jsx';
import PPMSurgicals from './components/ppmsurgicals.jsx';
import ProductsCatalogue from './components/productscatalogue.jsx';
import ServicesProfile from './components/services-profile.jsx';
import Sidebar from './components/sidebar.jsx';


//Containers
import Login from './containers/login.jsx';
import Logout from './containers/logout.jsx';
import Header from './containers/header.jsx';
import Register from './containers/register.jsx';

const history = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const  store=createStoreWithMiddleware(combinedReducers);

class App extends Component{

    render(){
        return(
            <div>
                <Provider store={store}>
                    <div>
                        <Header/>
                    </div>
                    <div>
                        <div className="col-sm-2"><Sidebar/></div>

                        <div className="col-sm-10">
                            <Router history={history}>
                                        <Switch>
                                            <Route exact path='/' component={Home} />
                                            <Route  path='/about-organization' component={AboutOrganization} />
                                            <Route  path='/association-scope-portfolio' component={AssociationScopePortfolio} />
                                            <Route  path='/contactus' component={ContactUs} />
                                            <Route  path='/login' component={Login} />
                                            <Route  path='/register' component={Register} />
                                            <Route  path='/user' component={User} />
                                            <Route  path='/achievementsgallery' component={AchievementGallery} />
                                            <Route  path='/architectural-structural' component={ArchitecturalStructural} />
                                            <Route  path='/call-form' component={CallFrom} />
                                            <Route  path='/civil-construction' component={CivilConstruction} />
                                            <Route  path='/consultancy-portfolio' component={ConsultancyPortfolio} />
                                            <Route  path='/designs' component={Designs} />
                                            <Route  path='/enquiry-form' component={EnquiryForm} />
                                            <Route  path='/general-rules-regulations' component={GeneralRulesRegulations} />
                                            <Route  path='/get-in-touch-form' component={GetinTouch} />
                                            <Route  path='/interior-design' component={InteriorDesigns} />
                                            <Route  path='/managing-directors-message' component={ManagingDirectorsMessage} />
                                            <Route  path='/mission-vision' component={MissionVision} />
                                            <Route  path='/ppm-event-management' component={PPMEventManagement} />
                                            <Route  path='/ppm-constructions' component={PPMConstructions} />
                                            <Route  path='/ppm-consultancy' component={PPMConsultancy} />
                                            <Route  path='/ppm-surgicals' component={PPMSurgicals} />
                                            <Route  path='/products-catalogue' component={ProductsCatalogue} />
                                            <Route  path='/services-profile' component={ServicesProfile} />
                                            <Route  path='/associate-form' component={AssociateForm} />
                                            <Route  path='/logout' component={Logout} />
                                        </Switch>
                                    </Router>
                        </div>
                    </div>

                    <div>
                        <Footer/>
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;

