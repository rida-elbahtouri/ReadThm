import { connect } from 'react-redux'; 
import { useEffect } from 'react';

import {getAllblogs} from '../functions/Api'
import { getAllBlogs } from '../actions';

import HeaderBlogs from './blogs/HeaderBlogs'
import BlogsForYou from './blogs/BlogsForYou'
import BlogsTrending from './blogs/BlogsTrending'

const Home=(props) => {



    useEffect(()=> getAllblogs().then(blogs =>{
        props.getAllBlogs(blogs.data)
        }).catch(e=>{
        console.log(e)
        })
    , []);
    

    const renderHelper = (blogs) => {
        if(blogs){
            return (
            <div>
            <HeaderBlogs blogs={blogs.slice(0,5)} />
            
            <div className="flex jus-btween">
                <BlogsForYou blogs = {blogs.slice(0,5)} />
                <BlogsTrending blogs = {blogs.slice(0,5)} />
            </div>
            
            </div>)

        }
    }
    return (
        <div className="div">
            {renderHelper(props.blogs)} 
        </div>
    )
}

const mapStateToProps = state => ({
    blogs: state.Blogs,
  });
  
  const mapDispatchToProps = dispatch => ({
    getAllBlogs: blogs => {
      dispatch(getAllBlogs(blogs));
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);