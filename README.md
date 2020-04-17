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

# Generate angular component page-title in lib mylib

`yarn nx g @nrwl/angular:component --project=mylib page-title`

# view dependences graph

`yarn nx dep-graph`

# Help in a command

`yarn nx g @nrwl/angular:app --help`

# create plain TS lib

`yarn nx g @nrwl/workspace:lib api-interface`