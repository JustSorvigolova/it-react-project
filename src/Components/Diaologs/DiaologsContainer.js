import {sendMessageCreator,} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import Dialogs from "./Diaologs";
// import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps  = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps  = (dispatch) => ({
      SendMessage: (SendMessage)=> {
          dispatch(sendMessageCreator(SendMessage));
      },
    })

export default compose(
     //withAuthRedirect,
    connect(mapStateToProps, {mapDispatchToProps}),
)(Dialogs);