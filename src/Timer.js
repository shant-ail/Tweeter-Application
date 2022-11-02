import Moment from 'react-moment';
import React from 'react';

class Timer extends React.Component{
    
    render(){
        return (
            <div style={{marginRight: "40px"}}>
                <Moment date = {this.props.time} format='LTS'/>   
            </div>
        );
    }
}
 
export default Timer;