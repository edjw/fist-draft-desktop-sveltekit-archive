<script lang="ts">
  import Quill from "../components/Quill.svelte";
  import ClearContentsButton from "../components/clearContentsButton.svelte";
  import CopyForWordGDocsButton from "../components/copyForWordGDocsButton.svelte";
  import CopyAsMarkdownButton from "../components/copyAsMarkdownButton.svelte";

  import { allowTyping } from "../lib/editingFunctions";
</script>

<Quill />

<section class="flex flex-col sm:flex-row items-start gap-6 mt-16">
  <ClearContentsButton on:allowTyping={allowTyping} />
  <CopyForWordGDocsButton />
  <CopyAsMarkdownButton />
</section>
