import {getUserById} from '../functions/Api';
import { connect } from 'react-redux'; 

const UserProfile =(props)=> {

        let user;
    
     if(props.match.params.id) {
       getUserById(props.match.params.id).then(res =>{
             console.log(res.data)
       })
     }else {
         console.log(props.user)
     }
    return (
        <div>
            <h1>hhh</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.Token,
    user: state.CurrentUser
  });


export default connect(mapStateToProps)(UserProfile);