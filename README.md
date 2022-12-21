# ModuOps web site

All the techy dirt you need to know for moduops web site.

## SST Framework

The project uses the [SST framework](https://sst.dev/). So we have a serverless hosted application that lives on AWS. SST is overkill for what we have going here but it makes dealing with AWS just about as easy as I've seen.

SST sets up as a mono repo. There are the backend services/stacks and the frontend projects. The backend sets up the "stack" with cdk to create all the required support services on AWS.

## Frontend

The frontend for this project is [Docusaurus](https://docusaurus.io/). Docusaurus is super easy to figure out and I think the websites created look great. Docusaurus creates a static web site from md and React files.

When doing development, navigate to the frontend directory where you can do the usual `npm install` and `npm run start` for local dev.

## Docs

ModuOps docs are located in `frontend/docs` directory. These are markdown files for various topics within the App. You will also find the ModuOps tutorial in the docs directory.

## Blog

The blog is located at `frontend/blog` directory. Blog post files are labeled with a date and name in the format of `YYYY-MM-DD-blog_name.md`.

## Logistics

- Project uses `npm` for dependency management
- source code is managed with `git` and checked into Github.

## Deploying app

There is nothing fancy about the deploy process. I have elected to NOT use any CI/CD service for this project. Deployments happen from the command line. You will need to have you AWS cli setup for deploys to work.

`npm run deploy` - deploys to dev.moduops.com

`npm run deploy:prod` - deploys to moduops.com
