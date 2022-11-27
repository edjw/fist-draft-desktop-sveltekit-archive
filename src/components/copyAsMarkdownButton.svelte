<script>
  import { contents, copiedStatus } from "./stores";

  let buttonText = "Copy as Markdown";

  if ($copiedStatus.markdown) {
    buttonText = "Copied!";
  }

  import TurndownService from "turndown";
  let turndownService = new TurndownService({ headingStyle: "atx" });

  const addMarkdownToClipboard = async (event) => {
    if (!navigator.clipboard) {
      return;
    }

    try {
      const html = $contents.html;
      const markdown = turndownService.turndown(html);
      await navigator.clipboard.writeText(markdown);
      event.target.textContent = "Copied!";
      document.querySelector("button#copyForWordButton").textContent =
        "Copy for Word / Google Docs";
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
  {buttonText}
</button>
