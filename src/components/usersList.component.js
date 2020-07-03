import React, { Component } from "react";
import ViewUserComponent from './viewuser.component';

class UsersListComponent extends Component {

    componentDidMount() {
        const { fetchusers,users } = this.props;
        if(!users.users.length){
            fetchusers(5);
        }
    }

    render() {
        const {  fetchusers,viewuser,currentuser } = this.props;
        const { users, loading } = this.props.users;
        return (
            <>
            
                {(loading || users.length === 0) ? (
                    <h2 style={{ textAlign: "center" }}>
                        Loading...
                    </h2>
                ) : (   <React.Fragment>
                        <div style={{display:'flex'}}>
                            <div style={{width:'30%', border:'1px solid'}}>
                                <ul className="userslist">
                                    {users.map((user, i) => (
                                        <Lists key={i} {...user} viewuser={viewuser} />
                                    ))}
                                </ul>
                            </div>
                            <div style={{width:'70%', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid'}}>
                              <ViewUserComponent user={currentuser}/>
                            </div>
                        </div>
                        <button onClick={()=>fetchusers(5)}>Fetch New Users</button>
                        <marquee>This Component uses Redux, Redux-saga, selectors , React hooks</marquee>
                         </React.Fragment>

                    )}
            </>
        );
    }
}

const Lists = props => {
    return (
        <li style={{color:"black",borderBottom:'1px solid', width:'100%', marginTop:'1px'}} onClick={()=>props.viewuser(props)}>
            <img src={props.picture.medium} style={{ borderRadius: "70px" }} alt='' />
            <p style={{}}>{`${props.login.username}`}</p>              
            
        </li>
    );
};


export default UsersListComponent;