# StoryTool

StoryTool is an open source web application for organizing stories.

## Why?

I find myself frequently on the lookout for online tools that are:

1.  Focused on writing _Stories_
1.  Free
1.  Usable on as many desktop machines as possible, if for some reason internet access is not available.
1.  Free

## Stack

StoryTool is built with Node, Express, React (Router), and MongoDB.

## Installation

```bash
npm install && cd client && npm install
```

## Usage

### Development

Run `npm start` to start the server in development mode. This will start the express server as well as the client, opening it in your default browser.

Files in the server directory are watched for changes, and changes to the client are auto reloaded in most cases.

### Building

To build client files first `cd client` then `npm run build`. This will delete the current `dist` directory if one exists and create a new one with the necessary bundled files (currently `bundle.js`, `index.html`, and `favicon.ico`).

### Serving

The built client must be served through express-- To do that, run `npm run serve` in the main directory.

### Deployment

This project is _currently_ set up to be deployed on heroku.

## API Reference

### AuthN/AuthZ
`/auth/sign-up` (Post)
`/auth/log-in` (Post)
`/auth/check-token` (Get)

### Users
`/user` (Put, Delete)
`/user/stories` (Get)

### Stories
`/stories/:storyId` (Get, Delete)

## License

Licensed under GNU General Public License
