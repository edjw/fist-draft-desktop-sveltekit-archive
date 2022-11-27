import { writable } from "svelte-local-storage-store";

const contents = writable("preferences", {
    datetime: "",
    html: "",
    contents: {
        "ops": []
    },
    plainText: ""
})

const copiedStatus = writable("copiedStatus", {
    word: false,
    markdown: false,
})

export { contents, copiedStatus};