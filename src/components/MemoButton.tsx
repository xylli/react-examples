import {FunctionComponent, memo, useCallback} from "react";
import {logRendering} from "../util/logging";
import Button from "./Button";

interface Props {
    text: string;
    onClick: () => void;
}

const MemoButton: FunctionComponent<Props> = ({text, onClick}) => {
    logRendering("MemoButton");
/*
    const callbackCLick = useCallback(() => {
        onClick();
    }, [])
*/

    return (
        <Button onClick={onClick} text={text}/>
    )
};

export default memo(MemoButton);