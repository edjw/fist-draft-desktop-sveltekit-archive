import { writable as writableLocalStorage } from "svelte-local-storage-store";
import { writable } from 'svelte/store';

const contents = writableLocalStorage("preferences", {
    datetime: "",
    html: "",
    contents: {
        "ops": []
    },
    plainText: ""
});

const copyButtonText = writable({
    wordButtonText: "Copy",
    markdownButtonText: "Copy as Markdown",
});

export { contents, copyButtonText };