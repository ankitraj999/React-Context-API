import React from 'react'
import Mall from './mall'
export const MallContext=React.createContext();

class ContextDemo1 extends React.Component{

render (){

    const movies = [
        {movie:"Tiger",time:'9pm'},
        {movie:"Cheetah",time:'9pm'},
        {movie:"Lion",time:'4pm'}
           ]
    return(
        <MallContext.Provider value={movies}>
            <Mall/>
        </MallContext.Provider>

        
    )
}
}
export default ContextDemo1