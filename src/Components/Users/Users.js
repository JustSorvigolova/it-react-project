import React from "react";
import selected from './User.module.css'
import {NavLink} from "react-router-dom";



let Users =(props)=> {


let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
let pages = [];
for (let i = 1; i <= pagesCount; i++) {
pages.push(i);

}
return <div><div>
        {pages.map(p => {

        return <span className={props.currentPage === p && selected.selected}
                     onClick={() => {
                         props.onPageChanged(p);
                     }}> {p} </span>
    })}
    </div>

{props.users.map( u => <div key={u.id}>
   <span><div><NavLink to={'profile/' + u.id}>
<img src={u.photos.small !== null ? u.photos.small : "https://img04.rl0.ru/afisha/e1425x801p0x0f1748x999q65i/s1.afisha.ru/mediastorage/92/0a/1b409f6ccb734b3ea05005e90a92.jpg"}
     width={70} alt=""/></NavLink></div><div>
{u.followed
 ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}> Unfollow </button>
 : <button disabled={props.followingInProgress.some(id => id === u.id)}
           onClick={() => {props.follow(u.id) }}> Follow </button>}
        </div>

        </span>
    <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status} </div>
        </span>
        <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </span>

    </span>

</div>)}

</div>
}

export default Users;



 /*class Users extends React.Component {
    componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
        });
    }
    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let  pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

           return <div>
               <div>
                   {pages.map(p =>{
                       return <button><span className={this.props.currentPage === p && selected}
                           onClick={(e) =>{this.onPageChanged(p)}} > {p} </span> </button>
                   })}
               </div>

        {
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small !== null ? u.photos.small : "https://img04.rl0.ru/afisha/e1425x801p0x0f1748x999q65i/s1.afisha.ru/mediastorage/92/0a/1b409f6ccb734b3ea05005e90a92.jpg"} width={70} alt=""/></div>
                    <div>
 {u.followed
     ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
     : <button onClick={() => { this.props.follow(u.id)}}>follow</button>}

                        </div>
                </span>
                <span>
                    <span>
                    <div>{u.name}</div>
                     <div>{u.status} </div>
                </span>
                    <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>

                </span>
            </div>)
        }
    </div>
   }
}
*/
