---
title: Tools and libraries
---

To work with the utilities provided by the Magento PWA project, you should be familiar with the tools and libraries described on this page.

## Webpack

[Webpack] is a configuration-driven module bundler for JavaScript applications.

Webpack's primary function is to create one or more bundles from the dependencies in your project's modules.
Webpack is also able to transform, package, or optimize resources and assets using plugins.
This allows you to extend webpack's functionality beyond JavaScript bundling.

The [pwa-buildpack] tool uses webpack to set up your development environment.
It uses your local environment variables and the configuration in the `webpack.config.js` file to generate a development environment for your system.

## React

[React] officially describes itself as a *JavaScript library for building user interfaces*. 
The library provides the following features that make PWA development easier:

* **Simple** - The React library does one thing: build a user interface.
  It does this without making assumptions about the underlying technology stack.
  This flexibility gives you the freedom to choose the appropriate solutions for the rest of your project.

* **Declarative** - Creating a complex user interface is difficult when working directly with the DOM API.
  React allows you to describe how your interface should look for a specific application state, and
  the library takes care of rendering it correctly when it changes.

* **Modular** - React encourages developers to create modular and re-usable UI components.
 Taking a modular approach to development makes your code easier to debug and maintain.

## Redux

[Redux] is a JavaScript library used for managing states in a web application. 

It provides a global store object that holds the state of the entire application.
Components that plug into the store have direct access to the specific state data they need.

This library is often paired with React to alleviate the problem of passing data down multiple component layers.

## GraphQL

[GraphQL] is a specification for a data query language on the client side and a service layer on the server side.
It is often seen as an alternative to using [REST] endpoints.

One of the main advantages of GraphQL over REST is the ability get data from multiple sources in a single call.
Unlike REST, which can require multiple server requests to aggregate data, 
a single GraphQL request returns only the data needed and nothing more.

Performance is an important metric for PWA applications.
Using GraphQL improves this by reducing the number of server calls and the amount of data returned.


[Webpack]: https://webpack.js.org/
[pwa-buildpack]: {{ site.baseurl }}{% link technologies/pwa-buildpack/index.md %}
[React]: https://reactjs.org/
[Redux]: https://redux.js.org/
[GraphQL]: https://graphql.org/
[REST]: https://en.wikipedia.org/wiki/REST