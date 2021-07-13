import { useState } from 'react';
import {CreateBlog ,AddPhotoToBlog} from '../../functions/Api';
import { connect } from 'react-redux'; 
import '../../assets/styles/addingblog.scss';


const AddingBlog =(props)=> {
    const [title ,setTitle] = useState("")
    const [content ,setContent] = useState("")
    const [photo ,setPhoto] = useState(null)

    // Create a function to check and save img temp
    // when new blog get save we return id and upload img to blog id
    const isPhotoValid = (photo) => {
        if(photo && photo.size > 1000000){
            return false;
        }else {
            return true;
        }
    }
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
           console.log(props)
        CreateBlog({title,content},props.token).then(res =>{
            const id = res.data.id;
            const myphoto = new FormData();

            myphoto.append(
                "photo",
                photo,
                photo.name
            );
            console.log(myphoto)
            AddPhotoToBlog(myphoto,id,props.token).catch(e => console.log(e))
            
        }).catch(err =>{
            console.log(err)
        })
       }

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="addblog-form">
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
