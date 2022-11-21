const preventTypingWhileSelected = (event) => {
    const allowedKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    const ctrlAllowedKeys = ["c", "r", "e", "l"];
    if (allowedKeys.includes(event.key)) {
        return true;
    } else if (event.ctrlKey && ctrlAllowedKeys.includes(event.key)) {
        return true;
    } else {
        event.preventDefault();
    }
};

const allowTyping = () => {
    document
        .querySelector("div.ql-editor")
        .removeEventListener("keydown", preventTypingWhileSelected);
};

const handleCut = (event) => {
    event.preventDefault();
};


export { allowTyping, handleCut, preventTypingWhileSelected }


