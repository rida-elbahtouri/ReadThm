import React from 'react'

const AddComment = () => {
    return (
        <div className="addcomment-form">
            <form>
                <textarea placeholder="what do you think?">

                </textarea>
                <input type="submit" value="Comment" className="green-btn btn" />
            </form>
        </div>
    )
}

export default AddComment
