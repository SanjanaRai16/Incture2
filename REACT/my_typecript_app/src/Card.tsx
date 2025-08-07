interface CardProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}
const Card: React.FC<CardProps> = ({ children, style }) => {
    return (
        <div style={{ border: '1px solid gray',
         padding: '20px', 
         borderRadius: '8px', ...style }}>   {/* //spread operator is used becos we obtain style from parent */}
            {children}
        </div>
    );
};
export default Card;  