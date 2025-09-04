# [Expect Web Development](https://talpitoo.com/expect-agency/)

Template for my [Expect Web Development](https://talpitoo.com/expect-agency/) website, 2025 facelift and revamp in [Astro](https://astro.build/).

![Expect Web Development](https://talpitoo.com/expect-agency/img/cover1200x630.png "Expect Web Development")

## 📲 Debugging localhost on phone

1. Find your local IP address, e.g. on Linux by running `hostname -I`. This will display the IP address, typically something like `192.168.x.x`.
2. Run `npm run dev -- --host --port 4321` then open http://192.168.x.x:4321 in your phone's browser.

## 🧑‍🚀 Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

## 📦 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
