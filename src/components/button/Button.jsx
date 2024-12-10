import { StyledButton } from './button.styles';

const Button = ({ color, children, action }) => {
	return (
		<button onClick={action} color={color}>
			{children}
		</button>
	);
};

export default Button;
