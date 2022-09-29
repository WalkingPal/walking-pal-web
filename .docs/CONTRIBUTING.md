# Contributing Guidelines

- walking-pal-web is [Next.js](https://nextjs.org/) project.
- We strictly abide by our [Style Guide](./STYLE-GUIDE.md) to create and style our React components
- We have an opinionated Project file structure. Always follow our [Project Structure Guide](./PROJECT-STRUCTURE.md) when creating new files/folders.

To start contributing a feature of a bugfix, follow the steps to setup your developement environmanet.

## Development Environment Setup

### Install tools

The following tools should be installed and running on your computer:

- [GIT](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (latest LTS version)
  - Install **Yarn** using `npm install --global yarn`

### Setup Git

1. Make sure that you personalize your GIT by setting your username and email for commits:

   ```sh
   git config --global user.name "John Doe"
   git config --global user.email johndoe@example.com
   ```

   :warning: Make sure to configure the same email as registered in your GitHub account. [See here also](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

2. Please refer to our [Branching Strategy](http://scenarioo.org/docs/develop/contribute/Branching-strategy.html) for more information about how we use branches and create releases. (**TL;DR**: When contributing a new feature or a bugfix, **always create a new branch from `dev` branch** to starting working on that feature/bugfix.)

### Get the Sources

1. [Fork the WalkingPal/walking-pal-web repository](https://github.com/WalkingPal/walking-pal-web/fork).
2. Clone your forked `<ur-github-username>/walking-pal-web` repository
   ```sh
   git clone https://github.com/<ur-github-username>/walking-pal-web.git
   cd walking-pal-web
   ```
3. Add our upstream [WalkingPal/walking-pal-web](https://github.com/WalkingPal/walking-pal-web.git) repostiory with label `upstream`
   ```sh
   git remote add upstream https://github.com/WalkingPal/walking-pal-web.git
   ```
4. Checkout to `dev` branch and setup your local `dev` branch to track changes from `upstream/dev`
   ```sh
   git checkout dev
   git branch --set-upstream-to upstream/dev
   ```
5. Install all project dependencies
   ```sh
   yarn install
   ```

## Run Next.js Developement server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing and modifying [home page](../pages/home/Home.tsx). The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/](http://localhost:3000/api/). This endpoint can be edited in [pages/api/index.pg.ts](../pages/api/index.pg.ts).

The `pages/api` directory is mapped to `/api/*` route. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing your first Pull Request

1. When starting to work on new feature or a bugfix, always first checkout the dev branch and update the dev branch
   ```sh
   git checkout dev
   git pull #this command will pull changes from upstream/dev as we previously configured our dev branch to track from upstream/dev
   ```
2. Create a new branch. We use [Branching Strategy](http://scenarioo.org/docs/develop/contribute/Branching-strategy.html) to create new branches.
   **Example:** Suppose you are going to start working on a bugfix that fixes a button's onClick behaviour. Then create a branch name something like: `fix/button-onclick`. Checkout the new branch and start working on your bugfix.
   ```sh
    git checkout -b fix/button-onclick
    # Now start working on your bugfix
   ```
3. After finishing doing all the bugfix changes, stage all you bugfix changes using `git add` command.
4. commit all those changes with a nice commit message that follows [our commit message guidelines](./GIT-GUIDELINES.MD).

   - If you get an error from husky commit-msg hook after running `git commit` command, this means that your commit message does not follow the commit guidelines. Correct your commit message.

5. Push your changes to your forked repository
   ```sh
   git push origin <your-branch-name> #in our example the branch name is "fix/button-onclick"
   ```
6. After pushing you will see a create pull request link as shown in the figure shown below:
   ![Creating A PR](./assets/creating-pr.png)
   Create your Pull Request using that link 🎉

## Making changes to a existing PR

Sometime Maintainers may request changes in your PR. It is advised NOT to close the existing PR to create a new one. Push changes to the exisiting PR branch. The PR will get automatically updated with your latest changes.

## Asking for help

[Join our discord server](https://discord.gg/Et3aQTsW6a) to meet with the amazing community folks at our Discord server. Ask your questions in the `#💬devs-general` channel.

That's all! Happy Contributing!!
