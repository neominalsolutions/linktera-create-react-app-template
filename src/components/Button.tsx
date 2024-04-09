import './Button.css';

type ButtonVariant = 'outline' | 'link' | 'default'; // Union Types
type ButtonColor = 'info' | 'success' | 'warning' | 'danger' | 'default';

// component props , (children veya type, action props)

// Pure Components ismi veriyoruz: Bunların içerisinde herhangi bir şekilde state çalışmaz.
// Birden fazla sayfaya dağılacağı için zaten içerisinde state bulundurmamalıdır. Gereksiz rendering durumları ortaya çıkabilir. 
type ButtonPropsType = {
	variant: ButtonVariant;
	color: ButtonColor;
	children: React.ReactNode; // html element butona html element olarak geçicek.
	onButtonClick?: (event: any) => void; // arrow function ile tıklamayı yakalayacağız
};

function Button({ variant, color, children, onButtonClick }: ButtonPropsType) {
	const colorValue = `${variant === 'link' ? 'link-' + color : color}`;


    // back-ticks ``

	return (
		<>
			<button
				className={`btn btn-${variant} ${colorValue}`}
				onClick={onButtonClick}
			>
				{children}
			</button>
		</>
	);
}

export default Button;
