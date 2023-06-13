declare namespace window {
    let enabledRenderLogging: boolean | undefined;
}

export const logRendering = (text: string) => {
    if (typeof window.enabledRenderLogging !== "undefined" && window.enabledRenderLogging) {
        console.log(text);
    }
}