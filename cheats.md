 ## Automation

 ### Image sizing

    sips -Z 640 *.jpg
 
 ### Eleventy
  
    eleventy
    eleventy --serve

### Deploy to Netlify
  
    netlify deploy --prod

### Git
    git add .
    git commit -m "my comment"
    git push -u origin master

#### Git Command Notes
    git fetch
Checks for changes on the remote. Takes a look at changes and allows for a diff. 

    git merge

    git pull
Is same as git fetch, git merge, get commit. Pull often. 

    git status
All the files and directories that have changed. 

    git add
Adds files to staging

    git commit -m "message"
Commit and add a commit message

    git commit -a
Stages and commits all

    git commit -p
Opens an interactive session which allows you to choose specific files.

    git push newFeature bitbucket
Sends any new commits to a newFeature branch in the bitbucket remote

    git stash -m "message"
Put file(s) in a stash for later. Something that can be saved and used for later without worrying about committing

#### Typical Release Cycle
Master > Develop > Feature > Develop > Release > Master + Develop

#### Homework
- Setup Feature Branches
- Pull Requests

 ## Colors

 Blue: 89,171,227
 Blue Invert (orange): 147, 84, 28

 Gold: 147, 84, 28
 Gold Invert (light blue): 144, 156, 236

