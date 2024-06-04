# èiginn

## What is this?

## Why does this exist?

## What tooling does this use?

### Node

Use [latest Node LTS (currently 20.11.1 as time of writing)](https://nodejs.org/en/download).

When testing _existing_ code/dependencies within this application, some of it
won't work when ran via NPM due to version conflicts. I have also installed React
19 (currently 18.3.x-canary), which causes similar version conflicts (version
ranges in dependencies, even if they allow 18.x, won't accept canary/rc releases).
For this reason alone (though the speed of installs is a nice bonus!), I've 
chosen to use [`pnpm`](https://pnpm.io/).

You do not need to install it. Node comes with a tool called [`corepack`](https://nodejs.org/docs/latest-v20.x/api/corepack.html)
which will allow you to use it essentially out-of-the-box. If you haven't already,
run:

```
corepack enable
```

`pnpm` commands will now work within the project. You can just use `npm` commands,
it _should_ just work, but I can't guarantee it.

### SSL

During local developmentm, the application/s run on HTTPS, not HTTP. As a
result, needs certs generated  in the root of the project for localhost.

This can be done manually, but it is trivially easy to set up with the
[`mkcert`](https://github.com/FiloSottile/mkcert) tool. Using this has the
added benefit of not causing browsers to show a warning page you have to click
past before viewing the app; it will add it to your machine's keyring.

## Why is this a monorepo?

I want integrstion environments. I do not want those environments to overlap
with the actual code. At the same time, those environments use the code: I
absolutely do not want to have to publish/link projects just to be able to use
the code.

The tradeoff is that monorepos are a complete fuck-on. I am throwing the dice
on that fuck-on being less painful than publishing/linking.


