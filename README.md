# Fist Draft Desktop

## Development
```
yarn install
yarn tauri dev
```

## Build
```
yarn tauri build
```

## Todo
- keep an eye on github action for `tauri-apps/tauri-action@dev` and switch to `tauri-apps/tauri-action@v1` or whatever when it's released


## Release new version
1. Bump the version number in src-tauri/Cargo.toml
2. Run cargo check to update Cargo.lock
3. Create a git tag in the format v#.#.#
4. Add release notes to the generated GitHub release and publish it