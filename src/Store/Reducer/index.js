const Inital_State = {
    User : [
        {
            name : 'zubair',
            email: 'zubair'
        },
        {
            name : 'asad',
            email : 'asad'
        }
    ]
}

export default (state=Inital_State,action)=>{
    console.log("ACTION :",action)
    

    
    
    switch(action.type){
        case "setdata":
            return{
                ...state,
                User : [...state.User,action.data]
            }

        case "deletedata":
            return{
                ...state,
                User : state.User.filter((item, index) => index !== action.key)
            }

        default :
        return state

    }
    
   

      
}