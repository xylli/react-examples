import React, {FunctionComponent, memo} from "react";
import {logRendering} from "../util/logging";
import Button from "./Button";
import {ToggleDispatch} from "./toggleReducer";

interface Props {
    text: string;
    toggleDispatch: ToggleDispatch;
}

const MemoButton: FunctionComponent<Props> = ({text, toggleDispatch}) => {
    logRendering("MemoButton");

    return (
        <Button onClick={() => toggleDispatch({type: "toggle"})} text={text}/>
    )
};

export default memo(MemoButton);