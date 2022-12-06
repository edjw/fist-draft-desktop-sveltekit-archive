const preventEditingWhileSelected = (event) => {
  const allowedKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
  const ctrlAllowedKeys = ["c", "r", "e", "l"];
  if (allowedKeys.includes(event.key)) {
    return true;
  } else if (event.key === "Control" && ctrlAllowedKeys.includes(event.key)) {
    return true;
  } else {
    event.preventDefault();
  }
};

const allowTyping = () => {
  document
    .querySelector("div.ql-editor")
    .removeEventListener("keydown", preventEditingWhileSelected);
};

const handleCut = (event) => {
  event.preventDefault();
};

export { allowTyping, handleCut, preventEditingWhileSelected };
