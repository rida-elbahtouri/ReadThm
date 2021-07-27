import HeaderBlogs from './blogs/HeaderBlogs'
import BlogsForYou from './blogs/BlogsForYou'
import BlogsTrending from './blogs/BlogsTrending'

import '../assets/styles/home.scss';

const Home=() => {


    return (
        <div className="div">
           <HeaderBlogs />
            
            <div className="grid two-grid blogs-for-you-trend">
                <BlogsForYou  />
                <BlogsTrending  />
            </div>
        </div>
    )
}


export default Home;