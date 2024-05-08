import { DOMAttributes } from "react";

export default interface IButton extends DOMAttributes<HTMLButtonElement> {
	children: any;
	classes?: string;
	color?: string;
	disabled?: boolean;
	url?: string;
	isSubmitButton?: boolean;
}
