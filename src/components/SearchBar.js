import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';

const SearchBar = () => {
    
    const [searchTerm , setSearchTerm] = useState(null);

    const history = useHistory();

    const searchFor = () => {
        if(searchTerm){
            history.push(`/search/${searchTerm}`)
        }
    }
    return (
             <div className="search-bar">
                <input onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" placeholder="Search" />
                <button onClick={searchFor}><BiSearch /></button>
            </div>
    )
}

export default SearchBar
