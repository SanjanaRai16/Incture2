import React,{Component} from "react";
import TimerComponent from "./TimerComponent";
class LifeCycleThird extends Component{
 constructor(){
    super();

    this.state={
        showTimer:0
    };
 }
 toggleTimer=()=>{
    this.setState({showTimer:!this.state.showTimer});
 }
 render(){
    console.log("render() method called...");
    return(
        <div>
            <h1>Updating</h1>
            <h3>Value:{this.state.value}</h3>
            <button onClick={this.toggleTimer}>ToggleTimer</button>
            {this.state.showTimer &&<TimerComponent/>}
        </div>
    )
 }
}
export default LifeCycleThird;