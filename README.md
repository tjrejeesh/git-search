##Ticket
```
React application to view a list of GitHub repositories with search functionality

Acceptance Criteria:
1. Display repository’s Id, name, watchers_count
2. Sort the results by the number of stars
3. Have a search input that will show results (from all possible repositories) to those that have its name matches the search field.

Assumptions:

1. Think of this as a green-field project with the freedom to choose whatever you feel is best, e.g. 3rd party libraries can be used if necessary
2. Feel free to use code bootstrapping tools (e.g. create-react-app) to save yourself time setting up the project
3. There is no need to focus on the UX of the page
4. As a rough guide, we don’t expect you to spend more than about 2 hours on this.

Subtasks:

1. Create react app with bootstrapping tool - create-react-app
2. Identify the dependencies 
    - Styling - installed node-sass
    - UI Library - Semantic UI React  
3. Invoke the Github API to fetch the data
    - https://api.github.com/users/USERNAME/repos
4. Create form field to search the git name
5. Create table using semantic ui react library
6. Get the input search data and fetch the repositories
    - Map the data to the table
7. Sort the table with table headers(Repo ID, Git Name, Watchers Count and Star Count)
8. Manual testing
9. Publish to the git repo
10. Create a demo

```

# git-search

The application is to search git repos

##Technologies
```bash
1. ReactJS
2. SASS
```

##Libraries & Node Modules
```bash
1. Semantic UI React
2. node-sass
3. semantic-ui-css
```

##API
```bash
1. GitHub API
```

## Clone the project repository
```bash
git clone https://github.com/tjrejeesh/git-search.git
```

## Run the application
```bash
cd git-search

install the dependencies:
npm install

run client:
npm start

Local:            http://localhost:3000/

```

## Demo
```bash
https://www.loom.com/share/195767f4e9834e008ca9264999a73861
```
