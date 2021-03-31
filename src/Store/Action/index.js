const set_data = (data) => {
    // console.log("Dispatch Data :",data)
    return (dispatch) => {
        // console.log("Dispatch Data :",data)
        dispatch({
            type: 'setdata',
            data: data
        })
        // console.log("My data ",data)
    }
}

const delete_data = (data)=>{
    return(dispatch) =>{
        dispatch(
            {
                type : 'deletedata',
                key:data
            }
        )
    }
}

export { set_data,delete_data}