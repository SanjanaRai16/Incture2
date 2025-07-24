import React ,{Component} from "react";
class TimerComponent extends Component{
       constructor(props){
        super(props);
    console.log("Constructor:Component Called");
    this.state={
        seconds:0
    };

    }
    componentDidMount(){
        console.log("Timer mounted");
        this.interval=setInterval(()=>{this.setState({seconds:this.state.seconds+1});},1000);
    }
componentWillUnMount(){
    console.log("component unmount..clear interval");
    clearInterval(this.interval);
}
render(){
    console.log("render() method called")
    return(
        <div>
            <h2> Timer:</h2>
            <h2>Timer:{this.state.seconds}seconds</h2>
        </div>
    );
}

}

export default TimerComponent;