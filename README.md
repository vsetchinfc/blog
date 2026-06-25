# blog
Vlad Setchin personal page and blog

## Development

- Required Node.js: a recent LTS (recommended: 18.x or 20.x). Newer Node 22+ may require `NODE_OPTIONS=--openssl-legacy-provider`.
- Package manager: Yarn (v1)

Install and run locally:

```powershell
cd blog
yarn install
yarn dev
```

Build for production:

```powershell
yarn build
```

If you encounter native build errors for `node-sass`, this repository uses `sass` (Dart Sass) and the `package.json` has been adjusted to avoid native `node-sass` builds. Prefer using the recommended Node LTS above.
