import wrapper from './App.module.css';
import React from "react";
import Navbar from "../Navbar/Navbar";
import bg from './App.module.css'
import {Route} from 'react-router-dom'
import UsersContainer from "../Users/UsersContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "../../Redux/app-reducer";
import {Preloader} from "../common/preloader/Preloader";
//import DiaologsContainer from "../Diaologs/DiaologsContainer";
//import ProfileContainer from "../Content/ProfileContainer";

const DiaologsContainer = React.lazy(()=> import("../Diaologs/DiaologsContainer"))
const ProfileContainer =React.lazy(()=>import("../Content/ProfileContainer"))
class App extends React.Component {


     componentDidMount() {
        this.props.initializeApp();
    }

    render() {
         if (!this.props.initialized){
             <Preloader/>
         }
        return (
            <div className={wrapper.app_wrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={bg.app_wrappercontentbackgroundcolor}>
                    <Route  path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                        <ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                        <DiaologsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

