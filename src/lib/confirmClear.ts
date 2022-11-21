import { contents } from "../components/stores";
import { confirm } from "@tauri-apps/api/dialog";

const clearContents = () => {
    contents.html = "";
    contents.contents = {};
    // contents.contents = { "ops": [{}] };
    contents.plainText = "";

    document.querySelector(".ql-editor").innerHTML = "";

    document.querySelector("button#copyForWordButton").textContent =
        "Copy for Word / Google Docs";

    document.querySelector("button#copyAsMarkdownButton").textContent =
        "Copy as Markdown";

    dispatch("allowTyping");
};

export const confirmClear = async () => {
    const confirmed = await confirm(
        "This will delete all your text. Are you sure?",
        { title: "Start again?", type: "warning" }
    );

    if (!confirmed) return;

    clearContents();
};