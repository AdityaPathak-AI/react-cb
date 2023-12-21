import React from "react";
class TimeSlot extends React.Component
{
    constructor(props)
    {
       super(props);
       this.state = {
        hour : this.props.slot.hour,
        minute : this.props.slot.min,
        second : this.props.slot.sec, 
        interval : 1,
    } 
    this.intervalObj = undefined
    }

    executeStopWatch = () =>{
      var hh = this.state.hour
      var min = this.state.minute
      var sec = this.state.second

      sec+=1
      if(sec>=60){
        min+=1
        sec = 0
      }
      if(min>=60){
        hh+=1
        min=0      
      }
      this.setState({hour:hh , minute:min , second:sec})
    }

    componentDidMount = () =>{
      this.intervalObj = setInterval(this.executeStopWatch,this.state.interval*1000)
    }

    componentWillUnmount = () =>{
      clearInterval(this.intervalObj)
    }

    changeInterval = (event) =>{
      clearInterval(this.intervalObj);
      console.log(event.target.value);
      this.intervalObj = setInterval(this.executeStopWatch , event.target.value*1000)
      this.setState({interval:event.target.value*1})
    }
  render()
  {
    
    return<>
       <b>Slot : {this.props.index}</b> &nbsp;
       <b>{this.state.hour}</b> &nbsp;
       <b>{this.state.minute}</b> &nbsp;
       <b>{this.state.second}</b> &nbsp;
       <select onChange={this.changeInterval}>
            <option>1</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
          </select>
    </>
  }
}
export default TimeSlot;