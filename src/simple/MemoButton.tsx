import React, {FunctionComponent, memo} from "react";
import {logRendering} from "../util/logging";
import Button from "./Button";

interface Props {
    text: string;
    toggle: () => void;
}

const MemoButton: FunctionComponent<Props> = ({text, toggle}) => {
    logRendering("MemoButton");
    return (
        <Button onClick={toggle} text={text}/>
    )
};

export default memo(MemoButton);