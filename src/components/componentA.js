import React from 'react'
import ComponentB from './componentB'
class ComponentA extends React.Component{
    render(){
        return(
            <div>
                <h1>In component A</h1>
                <ComponentB/>
            </div>

        )
    }
}
export default ComponentA;