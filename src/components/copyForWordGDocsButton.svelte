<script>
  import { contents, copyButtonText } from "./stores";

  const addTextToClipboard = async () => {
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
        $copyButtonText.wordButtonText = "Copied!";
        $copyButtonText.markdownButtonText = "Copy as Markdown";
      },
      function () {
        /* failure */
      }
    );
  };
</script>

<button class="button" id="copyForWordButton" on:click={addTextToClipboard}>
  {$copyButtonText.wordButtonText}
</button>
