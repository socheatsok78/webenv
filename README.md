# webenv

Loads variables from `.env` for web projects.

### Story

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on [The Twelve-Factor App](http://12factor.net/config) methodology.

While `dotenv` provide a convenient way of loading environment variables from a `.env` file for Node.js, however managing environment variables for the web doesn't seem to be any easier. 

So this is a totally ripped off from [`dotenv`](https://github.com/motdotla/dotenv) and [`dotenv-expand`](https://github.com/motdotla/dotenv-expand) functionality build for the web.

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
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
```

As early as possible in your application, import and configure dotenv:
```js
import * as webenv from '@socheatsok78/webenv'

(async () => {
    await webenv.config({ path: '/.env' })
    console.log(window.env) // remove this after you've confirmed it working
})()
```
