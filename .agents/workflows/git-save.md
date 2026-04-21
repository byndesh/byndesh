---
description: Stage all changes, commit with a conventional message, and push to GitHub
---

When the user types `/git-save <message>`, do the following:

1. Run `git add .` to stage all changes
2. Run `git status` to show what's staged
3. Run `git commit -m "<message>"` using the provided message (ensure it follows conventional commits format)
4. Run `git push origin main` (or current branch)
5. Report success or any errors
