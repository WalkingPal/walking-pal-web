# Git Guidelines

### 🚨 **Be a good commitizen** 🚨

##### When creating a commit, creating a good commit message is very important. 

For a detailed guide [follow this link](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/). Else follow the guide given below.

Commit messages are written in the following form:
```sh
commit_type(scope): commit message
```
- The `commit_type` can include the following types:
  1. **feat** – a new feature is introduced with the changes
  2. **fix** – a bug fix has occurred
  3. **chore** – changes that do not relate to a fix or feature and don't modify src or test files (*for example* updating dependencies, adding assets like images, config file changes)
  4. **refactor** – refactored code - code changes ( code changes neither fixes a bug nor adds a feature)
  5. **docs** – updates to documentation such as a the README or other markdown files
  6. **style** – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
  7. **perf** – performance improvements
  8. **ci** – continuous integration related
  9. **build** – changes that affect the build system or external dependencies

- The `scope` can be a name of a page or a component. **Mentioning a scope is optional**. It should be mentioned whenever possible
**Examples**: `home`, `faq`, `company`, `header`, `footer` etc.

- `commit message` is a simple lowercase string that describes what changes you have made in your commit.

##### Examples of how to create a good commit message
1. Suppose you added a feature in the home page. That feature is all about creating a new Events section.

   - So, your commit message must look like this: `feat(home): new events section`

2. Suppose you fixed a bug in a global component. Lets say that global component is the [Header component](../components/Header/Header.tsx). You fix the onClick event of the button.
   - So, your commit message must look like this: `fix(header): header compo onClick event`
   - Observe that here `header` scope repesents the [Header component](../components/Header/Header.tsx). Header component is a global component. Global Components are components that are used by more than one components/pages. Since this compoenent does not belong to just a single page, we did not write the name of a page in the scope, instead we wrote the name of the component (i,e `header`).
   - Also, observe that the commit message is always written in lowercase
 