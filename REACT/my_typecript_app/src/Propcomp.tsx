

/* function PropComp(props) {
  return (
    <div>
      <h2>Prop Component in Typescript</h2>
      <p>{props.name}</p>
    </div>
  );
}
export default PropComp; */


interface   MyProps {
  name: string;
}
/* const PropComp: React.FC<MyProps> = ({name}) => { */
const PropComp = (props: MyProps) => {             //destructuring without using react.fc
  return (
    <div>
      <h2>Prop Component in Typescript</h2>
      <p>Name:{ props.name}</p>
    </div>
  );
}
export default PropComp;