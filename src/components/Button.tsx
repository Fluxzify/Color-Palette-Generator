import { ButtonProps } from "@/types";

export default function Button(buttonProps: ButtonProps) {
return(

    <button className={`btn ${buttonProps.type}`} onClick={buttonProps.onClick}>{buttonProps.text}</button>
);
}