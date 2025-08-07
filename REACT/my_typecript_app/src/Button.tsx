interface ButtonProps {
  label: string;    
    onClick: () => void;
    disabled?: boolean;   // Optional prop, default is false
}   
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
export default Button;
