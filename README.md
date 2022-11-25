# Coaching by Sean

This is a project I set up to handle inbound coaching / mentoring / tutoring / leveling-up sessions
at my hourly rate over zoom or in person in Edinburgh.

If you want to get in touch directly, just email me at <a href="mailto:sean@thenewells.us">sean@thenewells.us</a>.

Feel free to file an issue here if something is wrong with the site, thanks!

## Development

<details>

<summary>How to develop locally</summary>

If you wanna fork this for your own purposes, or make a PR, you will first need to get:

- NodeJS (recommended v18+)
- pnpm (`brew install pnpm` or equivalent)
- An adequate editor with Typescript support (Neovim / VSCode)

Once your have that software installed, `git clone ...` this repo and then run `pnpm install`.

You're all set to run `pnpm dev` to get going locally!

Inside of this project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where any Astro/React/Vue/Svelte/Preact components go.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more about Astro?

Feel free to check [the docs](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

</summary>
