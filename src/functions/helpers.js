export const showError=(error)=> {
    if(error){
        return <p className="alert-danger">{error}</p>
    }
}
export const showSuccess = (msg) => {
    if(msg){
        return <p className="alert-success">{msg}</p>
    }
}