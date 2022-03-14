

const initstate={
    
        list:[]
}


export const SampleReducer=(state=initstate,action)=>{
    if(action.type==="list"){
        return{
            ...state,
            visible:action.payload
        }
    }
    
   
   
    return state
   
}