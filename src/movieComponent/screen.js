import React from 'react'
import {MallContext} from './index1'

// class MovieDisplay extends React.Component{
// render(){
//     // result=this.props.value;
//     return(
//         <div>
//             <h1>Screen Name</h1>
//              {
//                 this.props.value.map((obj,i)=>{
//                     return(
//                         <li>{obj.name}</li>
//                     )
//                 })
//             } 
//         </div>
//     )
// }

 const  MovieDisplay=(props)=>{
    
    return(
        <div>
            <h1>Screen Name</h1>
             {
               props.movies.map((obj,i)=>
                    
                    <li key={i}>{obj.movie}</li>
                    
                )
            } 
            <h1>Movie time</h1>
            {
               props.movies.map((obj,i)=>
                    
                        <li key={i}>{obj.time}</li>
                    
                )
            } 

        </div>
    )
        }


class Screen1 extends React.Component{
    render(){
        return(
            <MallContext.Consumer>
                {
                    (movies)=><MovieDisplay movies={movies}/>
                }
            </MallContext.Consumer>
        )

        
    }
}
export default Screen1