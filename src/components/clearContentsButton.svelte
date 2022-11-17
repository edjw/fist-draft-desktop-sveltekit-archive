<script>
  import { contents } from "./stores.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const confirmClear = () => {
    if (confirm("This will delete all your text. Are you sure?")) {
      clearContents();
    }
  };

  const clearContents = () => {
    $contents.html = "";
    $contents.contents = "";
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
