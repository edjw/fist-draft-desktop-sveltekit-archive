<script lang="ts">
  import { contents } from "../components/stores";

  import Quill from "../components/Quill.svelte";
  import ClearContentsButton from "../components/clearContentsButton.svelte";
  import CopyForWordGDocsButton from "../components/copyForWordGDocsButton.svelte";
  import CopyAsMarkdownButton from "../components/copyAsMarkdownButton.svelte";

  import { allowTyping } from "../lib/editingFunctions";
</script>

<Quill />

<section class="flex items-start gap-6 mt-10" id="bottomButtons">
  <ClearContentsButton on:allowTyping={allowTyping} />
  <CopyForWordGDocsButton />
  <CopyAsMarkdownButton />
</section>
