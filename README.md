# Xavitest

This project was generated using [Nx](https://nx.dev).

git remote add origin https://github.com/xavierclotet/monorepo.git
git push -u origin master

* yarn create nx-workspace name

* Despres de tocar algun fitxer , executes `yarn nx affected:test --parallel` i tirara els test q toquin.

# Make 3 kinds of libraries:

* Services only
* Business components and routes
* Components

You can import the services into other deps, and use components only where needed with lazy loading

Apps put the pieces together
