<script lang="ts">
  import { onMount } from "svelte";

  import { contents } from "./stores";

  import { keyBindings } from "./quillKeyBindings";

  import {
    handleCut,
    preventTypingWhileSelected,
  } from "../lib/editingFunctions";

  import type Quill from "quill";

  const updateStore = (container: HTMLDivElement) => {
    $contents = {
      datetime: String(new Date().getTime()),
      html: container.innerHTML.replace(new RegExp(`<p><br></p>`, "g"), ""),
      contents: quill.getContents(),
      plainText: quill.getText(),
    };
  };

  let editor;
  let quill: Quill;

  let toolbarOptions = [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline", "link"],
    [{ list: "ordered" }, { list: "bullet" }],

    ["clean"],
  ];

  export let theme = "snow";

  // Don't change this weird formatting
  const placeholderText =
    "Start writing…\n\nYou can't delete any text you type.\n\nBreeze through your typos. You can clean them up later.";

  onMount(async () => {
    const { default: Quill } = await import("quill");

    quill = new Quill(editor, {
      modules: {
        toolbar: toolbarOptions,
        keyboard: {
          bindings: keyBindings,
        },
        clipboard: {
          matchVisual: false,
        },
      },
      theme: theme,
      placeholder: placeholderText,
    });

    quill.root.setAttribute("spellcheck", false);

    // Maybe can remove this?
    if ($contents.contents !== undefined) {
      console.log("reloading contents");
      quill.setContents($contents.contents);
    }

    quill.focus();

    quill.on("text-change", function () {
      updateStore(container);
      console.log(typeof $contents.contents);
    });

    const container = editor.querySelector("div.ql-editor");

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

<div class="editor-wrapper">
  <div bind:this={editor} on:text-change={updateStore} on:cut={handleCut} />
</div>

<!-- <div>{JSON.stringify($contents.contents)}</div> -->
