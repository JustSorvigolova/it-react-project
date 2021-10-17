import {connect} from "react-redux";
import {followSuccess, setCurrentPage,unfollowSuccess,toggleFollowingProgress, getUsers,} from "../../Redux/users-reduser";
import React from "react";
import {Preloader} from "../common/preloader/Preloader";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
     this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (pageNumber)=>{
         this.props.getUsers(pageNumber,this.props.pageSize);
    }
    render(){
           return <>

               { this.props.isFetching ? <Preloader/>: null}
           <Users onPageChanged={this.onPageChanged} totalUserCount ={this.props.totalUserCount}
           pageSize = {this.props.pageSize}
           currentPage={this.props.currentPage}
           users={this.props.users}
           follow={this.props.follow}
           unfollow={this.props.unfollow}
           followingInProgress={this.props.followingInProgress}/>
      </>
   }
}


/*let mapStateToProps  = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUserCount : state.usersPage.totalUserCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/

let mapStateToProps  = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUserCount : state.usersPage.totalUserCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose(
     //withAuthRedirect,
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: getUsers,
})
)(UsersContainer)

