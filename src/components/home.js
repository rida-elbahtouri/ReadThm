
import { connect } from 'react-redux'; 


const Home=(props) => {
    
    console.log(props)
    return (
        <div>
    Home        
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.Token,
  });
  

export default connect(mapStateToProps)(Home);