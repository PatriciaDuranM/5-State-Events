import { StyledButton } from './button.styles';

const Button = ({ color, children, action, disabled }) => {
	return (
		<button disabled={disabled} onClick={action} color={color}>
			{children}
		</button>
	);
};

export default Button;
