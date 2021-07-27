import {useState,useEffect} from 'react'
import {searchForBlog} from '../functions/Api';
import ResultCard from './blogs/ResultCard';
import '../assets/styles/home.scss'
const ResultPage = (props) => {
    useEffect(() => {
        searchForBlog(props.match.params.term)
        .then((res) => setSearchResult(res.data))
        .catch((err) => console.log(err))
    },[])

    const [searchResult,setSearchResult] = useState(null)
    const renderHelpeer = (blogs) => {
        if(blogs){
            const res = blogs.map(blog=>{
                return <ResultCard key={blog.id} blog = {blog} />
            })
            return res
        }
    }
    return (
        <div>
           {renderHelpeer(searchResult)}
        </div>
    )
}

export default ResultPage
