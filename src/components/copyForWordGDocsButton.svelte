<script>
  import { contents } from "./stores";

  const addTextToClipboard = async (event) => {
    const formattedText = $contents.html;
    const plainText = $contents.plainText;
    const item = [
      new ClipboardItem({
        "text/html": new Blob([formattedText], { type: "text/html" }),
        "text/plain": new Blob([plainText], { type: "text/plain" }),
      }),
    ];

    navigator.clipboard.write(item).then(
      function () {
        event.target.textContent = "Copied!";
        document.querySelector("button#copyAsMarkdownButton").textContent =
          "Copy as Markdown";
      },
      function () {
        /* failure */
      }
    );
  };
</script>

<button class="button" id="copyForWordButton" on:click={addTextToClipboard}
  >Copy for Word / Google Docs</button
>
