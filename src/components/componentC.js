import React from 'react'
import { UserConsumer } from './userContext';
class ComponentC extends React.Component{
    render(){
        return(
            <div>
                <h1>In Component C</h1>
                <UserConsumer>
                    {(username2,ank)=>{
                      return  <div>Hello {username2}{ank}</div>
                    }}
                </UserConsumer>
            </div>

        )
    }
}
export default ComponentC;