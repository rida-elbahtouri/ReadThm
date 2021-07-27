import { connect } from 'react-redux'; 
import ResultCard from './blogs/ResultCard';
import '../assets/styles/home.scss'
const ResultPage = (props) => {
  
    const renderHelpeer = (blogs) => {
        if(blogs && blogs.length > 0){
            const res = blogs.map(blog=>{
                return <ResultCard key={blog.id} blog = {blog} />
            })
            return res
        }else {
            return <h1>There are 0 Results</h1>
        }
    }
    return (
        <div>
           {renderHelpeer(props.Results)}
        </div>
    )
}

const mapStateToProps = state => ({
    Results:state.Results
  });


export default connect(mapStateToProps)(ResultPage)
