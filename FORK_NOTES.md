# Fork notes

This `release` branch is the consumable form of [`oryanmoshe/orbkit`](https://github.com/oryanmoshe/orbkit), repackaged as `@dreamteamapp/orbkit` for direct `github:` installs.

## Layout (release branch)

- Flat root: `package.json`, `src/`, `dist/` are at the top level (upstream's `packages/core` promoted to root)
- `dist/` is **committed** so consumers can `npm install` directly from this branch without a build step
- Test files are excluded from `dist/types/`

## Upstream sync workflow

The fork's `main` branch is an unmodified mirror of `oryanmoshe/orbkit:main`. To pull upstream changes into `release`:

```bash
# Refresh main from upstream
git checkout main
git pull https://github.com/oryanmoshe/orbkit.git main
git push origin main

# Rebuild release from new main
git checkout release
rm -rf src package.json tsconfig.json
git checkout main -- packages/core LICENSE README.md
mv packages/core/* .
rmdir packages/core packages
# Re-edit package.json: name -> @dreamteamapp/orbkit, scripts -> esbuild (see git log)
# Re-edit tsconfig.json: inline parent + exclude tests
bun install
bun run build
git add -A && git commit -m "sync: pull upstream <SHA>"
git tag v0.0.X
git push origin release --tags
```

## Consumer install

```bash
npm install github:dreamteamapp/orbkit#v0.0.1
# or pin to a commit:
# npm install github:dreamteamapp/orbkit#<sha>
```

The package name resolves to `@dreamteamapp/orbkit`, so imports look like:

```ts
import { OrbScene, Orb } from "@dreamteamapp/orbkit";
```
