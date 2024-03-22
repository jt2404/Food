import React from "react"
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props)     
        console.log(props)
        this.state ={
            count1:0,
            count2:2,
        }
    }
    

    render()
    {
        const {count1} =this.state;
        const {count2} =this.state;
        return(
            <div className='user-card'>
            <h1>count1: {count1}</h1>
            <button onClick={()=>{
                this.setState({
                    count1 : this.state.count1 + 1
                })
               
            }}>
                Count Increase</button>   
            <h3>Name : {this.props.name}</h3>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @akshaymarch7</h4>
          </div>
        )
    }
}
export default UserClass
