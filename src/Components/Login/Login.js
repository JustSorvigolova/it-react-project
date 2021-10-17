import React from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reduser";
import {Redirect} from "react-router";


const LoginForm = (props) => {
        return (
               <form onSubmit={props.handleSubmit}>
                   <div><Field placeholder={"Email"} name={"email"} component={"input"}/></div>
                   <div><Field placeholder={"Password"} name={"password"}  component={"input"} type="password" /></div>
                   <div><Field component={"input"} name={"rememberMe"}  type="checkbox"/> remember me</div>
                   <div>
                       <button>Submit</button>
                   </div>
                   {
                       props.error &&
                       <div>
                           {props.error}
                       </div>
                   }
               </form>
 )
}

const LoginReduxForm = reduxForm({
        form: 'login'
})(LoginForm)



const Login= (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password,formData.rememberMe)
    }
    if (props.isAuth){
     return   <Redirect to={"/profile"} />
    }
        return(
           <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
           </div>
    )
}
const mapStateToProps =(state)=>({
        isAuth : state.auth.isAuth,
})
export default connect(mapStateToProps,{login})(Login);
