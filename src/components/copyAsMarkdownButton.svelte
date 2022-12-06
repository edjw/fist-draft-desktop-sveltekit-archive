<script>
  import { contents, copyButtonText } from "./stores";

  import TurndownService from "turndown";
  let turndownService = new TurndownService({ headingStyle: "atx" });

  const addMarkdownToClipboard = async () => {
    if (!navigator.clipboard) {
      return;
    }

    try {
      const html = $contents.html;
      const markdown = turndownService.turndown(html);
      await navigator.clipboard.writeText(markdown);

      $copyButtonText.markdownButtonText = "Copied!";

      $copyButtonText.wordButtonText = "Copy";
    } catch (error) {
      console.error("Copy failed", error);
    }
  };
</script>

<button
  class="button"
  id="copyAsMarkdownButton"
  on:click={addMarkdownToClipboard}
>
  {$copyButtonText.markdownButtonText}
</button>
