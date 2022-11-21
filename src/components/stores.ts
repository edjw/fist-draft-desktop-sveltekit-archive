import { writable } from "svelte-local-storage-store";

export const contents = writable("preferences", {
    datetime: "",
    html: "",
    contents: {
        "ops": []
    },
    plainText: ""
})