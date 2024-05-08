import IButton from "@type/component/IButton";
import { FC } from "react";
import NextLink from "next/link";

const Button: FC<IButton> = ({
	children,
	classes,
	color,
	disabled,
	url,
	isSubmitButton,
	...props
}) => {
	const button = (
		<button
			type={isSubmitButton ? "submit" : "button"}
			className={`button button--${color || "primary"} ${classes} ${
				disabled ? "opacity-70 cursor-not-allowed" : ""
			} 
			`}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
	return url ? <NextLink href={url}>{button}</NextLink> : button;
};

export default Button;
