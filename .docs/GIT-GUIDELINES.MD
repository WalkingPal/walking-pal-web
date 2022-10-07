# Git Guidelines

### 🚨 **Be a good commitizen** 🚨

##### When creating a commit, writing a good commit message is very important. 

For a detailed Guide [follow this link](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/). Else follow the guide given below.

Commit messages are written in the following format:
```sh
commit_type(scope): commit message
```
- The `commit_type` can include the following types:
  1. **feat** – used when a new feature is introduced
  2. **fix** – used when a bug fix is added 
  3. **chore** – for changes that do not relate to a fix or feature and don't modify src or test files (*for example* updating dependencies, adding assets like images, config file changes)
  4. **refactor** – for "code refactor" changes, i.e changes in the code that neither fixes a bug nor adds a feature
  5. **docs** – for changes to the documentation such as the README.md or other markdown files
  6. **style** – for changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
  7. **perf** – for performance improvements changes.
  8. **ci** – for changes related to continuous integration 
  9. **build** – for changes that affect the build system or external dependencies

- The `scope` can be a name of a page or a component. **Mentioning a scope is optional**. It should be mentioned whenever possible.
**Examples**: `home`, `faq`, `company`, `header`, `footer` etc.

- `commit message` is a simple lowercase string that describes all the edits/changes you have made in your commit.

##### Examples of how to create a good commit message
1. Suppose you added a feature in the home page and that feature is all about creating a new Events section.

   - So, your commit message must look like this: `feat(home): new events section`

2. Suppose you fixed a bug in a global component. Lets say that global component is the [Header component](../components/Header/Header.tsx). You have fixed the onClick event of the button.
   - So, your commit message must look like this: `fix(header): fix header component onClick event`
   - Observe that here `header` scope represents the [Header component](../components/Header/Header.tsx). The Header component is a global component. Global Components are the components that are used by more than one components/pages. Since this component does not belong to just a single page, we did not write the name of a page in the scope, instead, we wrote the name of the component (i,e `header`).
   - Also, observe that the commit message is always written in lowercase.
 
