import React from 'react';

const ViewUserComponent = (props) =>{
    if(!props.user || !Object.keys(props.user).length){
        return (<h1>Select User</h1>)
    }    
    const {name, gender, email, location, phone, picture, dob} = props.user;   
    
    return(
        <div>
            <img src={picture.large} style={{ borderRadius: "70px" }} alt='' />
            <table>
                <tr><td style={{textAlign:'left'}}><b>Name :</b></td><td style={{textAlign:'left'}}><p> {`${name.title} ${name.first} ${name.last}`}</p></td></tr>
                <tr><td style={{textAlign:'left'}}><b>Gender : </b></td><td style={{textAlign:'left'}}><p>{`${gender}`}</p></td></tr>
                <tr><td style={{textAlign:'left'}}><b>Age :</b></td><td style={{textAlign:'left'}}><p> {`${dob.age}`}</p></td></tr>
                <tr><td style={{textAlign:'left'}}><b>Email :</b></td><td style={{textAlign:'left'}}><p> {`${email}`}</p></td></tr>
                <tr><td style={{textAlign:'left'}}><b>Phone : </b></td><td style={{textAlign:'left'}}><p>{`${phone}`}</p></td></tr>
                <tr><td style={{textAlign:'left'}}><b>Address</b> :</td><td style={{textAlign:'left'}}><p> {`${location.street.number},${location.street.name}`}<br/>
            {`${location.city},${location.state},${location.country},${location.postcode}`}
            </p></td></tr>
            </table>
            
        </div>    
    )


}

export default ViewUserComponent;