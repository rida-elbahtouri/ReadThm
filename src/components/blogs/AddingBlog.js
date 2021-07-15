import { useState } from 'react';
import {CreateBlog ,AddPhotoToBlog} from '../../functions/Api';
import {isPhotoValid} from '../../functions/checkPhoto';
import { connect } from 'react-redux'; 
import { useHistory } from 'react-router';
import '../../assets/styles/addingblog.scss';


const AddingBlog =(props)=> {
    const [title ,setTitle] = useState("")
    const [content ,setContent] = useState("")
    const [photo ,setPhoto] = useState(null)

    const history = useHistory();

    // Create a function to check and save img temp
    // when new blog get save we return id and upload img to blog id
    
    const imagError = () => {
        if(!isPhotoValid(photo)) {
            return (<p className="alert-danger">
                Image Size is too big try with smaller file or use  
                 <a target="_blank" href="https://www.reduceimages.com/"> this</a>
                </p>)
        }
    }
    const handleSubmit = (e) => {
       e.preventDefault();

       if(title && content && isPhotoValid(photo)){
        CreateBlog({title,content},props.token).then(res =>{
            const id = res.data.id;
            const myphoto = new FormData();
            myphoto.append(
                "photo",
                photo,
                photo.name
            );
            AddPhotoToBlog(myphoto,id,props.token).catch(e => console.log(e))   
            history.push(`/blog/${id}`)

        }).catch(err =>{
            console.log(err)
        })
       }

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="blog-form">
                <div className="form-field">
                <label>Title</label>
                <input onChange={e => setTitle(e.target.value)}
                type="text" placeholder="enter blog title" required />
                </div>
                <div className="form-field">
                    {imagError()}
                <label>Photo</label>
                <input onChange={e => setPhoto(e.target.files[0])}
                type="file" className="green-btn btn" accept="image/*" />
                </div>
                <div className="form-field">
                <label>Content</label>
                <textarea onChange={e => setContent(e.target.value)}
                required ></textarea>
                </div>

                <input className="green-btn btn" type="submit" value="Create blog" />
            </form>
        </div>
    )
}


const mapStateToProps = state => ({
    token: state.Token,
});

export default connect(mapStateToProps)(AddingBlog);
