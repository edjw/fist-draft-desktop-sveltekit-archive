<script lang="ts">
  import { onMount } from "svelte";

  import { contents, copyButtonText } from "./stores";

  import { confirmClear } from "../lib/confirmClear";

  import { keyBindings } from "./quillKeyBindings";

  import {
    handleCut,
    preventTypingWhileSelected,
    allowTyping,
  } from "../lib/editingFunctions";

  // This gets bound through Svelte to a div at the bottom of this file
  let editor: HTMLDivElement;

  onMount(async () => {
    const { default: Quill } = await import("quill");

    const quill = new Quill(editor, {
      modules: {
        // toolbar: toolbarOptions,
        toolbar: "#toolbar-container",
        keyboard: {
          bindings: keyBindings,
        },
        clipboard: {
          matchVisual: false,
        },
      },
      theme: "snow",
      placeholder:
        "Start writing…\n\nYou can't delete, cut, or overwrite any text you type.\n\nBreeze through your typos. You can clean them up later.",
    });

    const container = editor.querySelector("div.ql-editor");

    const updateStore = () => {
      $contents = {
        datetime: String(new Date().getTime()),
        html: container?.innerHTML.replace(new RegExp(`<p><br></p>`, "g"), ""),
        contents: quill.getContents(),
        plainText: quill.getText(),
      };
    };

    const handleEdit = () => {
      if ($copyButtonText.markdownButtonText === "Copied!") {
        $copyButtonText.markdownButtonText = "Copy as Markdown";
      }

      if ($copyButtonText.wordButtonText === "Copied!") {
        $copyButtonText.wordButtonText = "Copy";
      }

      updateStore();
    };

    quill.root.setAttribute("spellcheck", false);

    if ($contents.html !== "") {
      console.log("reloading contents");
      quill.setContents($contents.contents);
    }

    quill.focus();

    quill.on("text-change", function () {
      handleEdit();
    });

    quill.on("selection-change", function (range) {
      if (range && range.length > 0) {
        container.addEventListener("keydown", preventTypingWhileSelected);
      }
      if (!range) {
        container.removeEventListener("keydown", preventTypingWhileSelected);
      }
      if (range && range.length == 0) {
        container.removeEventListener("keydown", preventTypingWhileSelected);
      }
    });

    // End of on mount
  });
</script>

<pre style="color: white">{JSON.stringify($copyButtonText, null, 2)}</pre>

<div id="toolbar-container">
  <span>
    <button class="ql-header" value="1" title="Header 1" />
    <button class="ql-header" value="2" title="Header 2" />
  </span>

  <span>
    <button type="button" class="ql-bold" title="Bold" />

    <button type="button" class="ql-italic" title="Italic" />

    <button type="button" class="ql-underline" title="Underline" />

    <button type="button" class="ql-link" title="Link" />
  </span>

  <span>
    <button
      type="button"
      class="ql-list"
      value="ordered"
      title="Numbered list"
    />

    <button
      type="button"
      class="ql-list"
      value="bullet"
      title="Bulletpoint list"
    />
  </span>

  <span>
    <button type="button" class="ql-clean" title="Remove styles" />
  </span>

  <span class="ml-auto">
    <button
      type="button"
      id="resetText"
      class="text-sm hover:outline-none"
      on:click={confirmClear}
      on:allowTyping={allowTyping}
    >
      <span class="px-4 border-2 hover:outline-none">Start again</span>
    </button>
  </span>
</div>

<div class="editor-wrapper">
  <div bind:this={editor} on:cut={handleCut} />
</div>
