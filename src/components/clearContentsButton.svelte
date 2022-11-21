<script>
  import { contents } from "./stores";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { confirm } from "@tauri-apps/api/dialog";

  const confirmClear = async () => {
    const confirmed = await confirm(
      "This will delete all your text. Are you sure?",
      { title: "Start again?", type: "warning" }
    );
    if (!confirmed) return;
    clearContents();
  };

  const clearContents = () => {
    $contents.html = "";
    $contents.contents = {"ops":[]};
    $contents.plainText = "";
    document.querySelector(".ql-editor").innerHTML = "";
    document.querySelector("button#copyForWordButton").textContent =
      "Copy for Word / Google Docs";
    document.querySelector("button#copyAsMarkdownButton").textContent =
      "Copy as Markdown";
    dispatch("allowTyping");
  };
</script>

<button class="button" on:click={confirmClear}>Start again</button>
