import {FunctionComponent} from "react";
import {logRendering} from "../util/logging";

interface Props {
    text: string;
    onClick: () => void;
}

const Button: FunctionComponent<Props> = ({text, onClick}) => {
    logRendering("Button");

    return (
        <button onClick={onClick}>{text}</button>
    )
};

export default Button;