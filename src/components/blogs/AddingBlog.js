import '../../assets/styles/addingblog.scss';
const AddingBlog =()=> {

    return (
        <div>
            <form className="addblog-form">
                <div className="form-field">
                <label>Title</label>
                <input type="text" placeholder="enter blog title" />
                </div>
                <div className="form-field">
                <label>Photo</label>
                <input type="file" accept="image/*" />
                </div>
                <div className="form-field">
                <label>Content</label>
                <textarea></textarea>
                </div>
            </form>
        </div>
    )
}

export default AddingBlog;