# @socheatsok78/webenv

Loads variables from `.env` for web projects.

[![npm-downloads](https://img.shields.io/npm/dw/@socheatsok78/webenv?style=flat-square)](https://www.npmjs.com/package/@socheatsok78/webenv)
[![license](https://img.shields.io/github/license/socheatsok78/webenv?style=flat-square)](LICENSE)

### Story

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

**What is Dotenv?**

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on [The Twelve-Factor App](http://12factor.net/config) methodology.

**Why Webenv?**

While `dotenv` provide a convenient way of loading environment variables from a `.env` file for Node.js, however managing runtime environment variables for the web doesn't seem to be any easier.

This project is aimed to fix the those on the web by providing a wrapper to `dotenv` using `fetch` to make a request for `.env` file from your publicly accessible path. It is a highly customized [`dotenv`](https://github.com/motdotla/dotenv) and [`dotenv-expand`](https://github.com/motdotla/dotenv-expand) built for the web.

## Install

```sh
npm install @socheatsok78/webenv --save
```

Or installing with yarn?

```sh
yarn add @socheatsok78/webenv
```

## Usage

Create a `.env` file in the public folder of your project:
```env
# Please DO NOT store your sensitive data here
# This file must be publicly accessible by anyone
API_BACKEND_ENDPOINT="https://api.example.com"
```

> NOTE: 
> 
> The `webenv` do not have access to the server environment variables. 
> You can consider that the `webenv` is only use for runtime configuration only.

As early as possible in your application, import and configure dotenv:
```js
import * as webenv from '@socheatsok78/webenv'

(async () => {
    await webenv.config({ path: '/.env' }) // make a fetch request to '/.env' and parse the string response
    console.log(window.env) // remove this after you've confirmed it working
})()
```
