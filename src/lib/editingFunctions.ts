const preventTypingWhileSelected = (event: KeyboardEvent) => {
    const allowedKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    if (allowedKeys.includes(event.key)) {
        return true;
    } else {
        event.preventDefault();
    }
};

const allowTyping = () => {
    document
        .querySelector("div.ql-editor")
        ?.removeEventListener("keydown", preventTypingWhileSelected);
};

const handleCut = (event: Event) => {
    event.preventDefault();
};


export { allowTyping, handleCut, preventTypingWhileSelected }


