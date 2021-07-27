import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {searchForBlog} from '../functions/Api';
import { connect } from 'react-redux'; 
import { SearchForBlogs } from '../actions'; 
import {BiSearch} from 'react-icons/bi';

const SearchBar = (props) => {
    
    const [searchTerm , setSearchTerm] = useState(null);

    const history = useHistory();

    const searchFor = () => {
        if(searchTerm){
            
            searchForBlog(searchTerm)
            .then((res)=>{
                props.SearchForBlogs(res.data)
                console.log(res.data)
                history.push(`/search/${searchTerm}`)
            })
            .catch(err=>console.log(err))
        }
    }
    return (
             <div className="search-bar">
                <input onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" placeholder="Search" />
                <button onClick={searchFor}><BiSearch /></button>
            </div>
    )
}


const mapDispatchToProps = dispatch => ({
    SearchForBlogs: blogs => {
      dispatch(SearchForBlogs(blogs));
    },
});


export default connect(null,mapDispatchToProps)(SearchBar);
