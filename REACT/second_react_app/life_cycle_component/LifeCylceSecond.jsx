import React,{Component} from "react";
class LifeCycleSecond extends Component{
 constructor(props){
    super(props);
    console.log("Constructor:Component Called");
    this.state={
        value:0
    };
 }
 static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps() method called");
    return null;
 }
 shouldComponentUpdate(nextProps,nexState){
    console.log("shouldComponentUpdate method called");
    return true;
 }
 getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(" method called getSnapshotBeforeUpdat");
    return true;
 }
 
 componentDidUpdate(){
    console.log("componentDidUpdatt")
 }
 componentDidMount(){
    console.log("Component did mount called")
 }
 render(){
    console.log("render() method called...");
    return(
        <div>
            <h1>Updating</h1>
            <h3>Value:{this.state.value}</h3>
            <button onClick={()=>this.setState({value:this.state.value+1})}>Increment</button>
        </div>
    )
 }
}
export default LifeCycleSecond;