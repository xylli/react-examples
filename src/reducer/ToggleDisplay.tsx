import {FunctionComponent} from "react";
import {logRendering} from "../util/logging";

interface Props {
    value: boolean;
}

const ToggleDisplay: FunctionComponent<Props> = ({value}) => {
    logRendering("ToggleDisplay");
    return (
        <p>
            Toggle value: {value ? "Yes" : "No"}
        </p>
    )
};

export default ToggleDisplay;