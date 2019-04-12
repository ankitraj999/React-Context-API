import React from 'react'
import ComponentC from './componentC'
class ComponentB extends React.Component{
    render(){
        return(
            <div>
                <h1>In component B</h1>
                <ComponentC/>
            </div>

        )
    }
}
export default ComponentB;