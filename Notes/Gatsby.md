# Notes on Gatsby and other things

## npm

npm is a JavaScript package manager. A package is a module of code that you can choose to include in your projects. If you just downloaded and installed Node.js, npm was installed with it!

npm has three distinct components: the npm website, the npm registry, and the npm command line interface (CLI).

- On the npm website, you can browse what JavaScript packages are available in the npm registry.
- The npm registry is a large database of information about JavaScript packages available on npm.
- Once you’ve identified a package you want, you can use the **npm CLI** to install it in your project or globally (like other CLI tools). The npm CLI is what talks to the registry — you generally only interact with the npm website or the npm CLI.

## JSX

```HTML

 <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div>

```

In JSX, you can embed any JavaScript expression by wrapping it with `{}`

If you pass multipme props to your component e.g. `<Header/>` you do it like this:

```HTML
src/pages/about.js

<Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />

```

…you would have been able to also access the arbitraryPhrase prop: {props.arbitraryPhrase}.

## React and Gatsby

### Using layout components

Layout components are for sections of a site that you want to share across multiple pages.

Gatsby sites will commonly have a layout component with a shared header and footer. Other common things to add to layouts include a sidebar and/or a navigation menu.

### Using the <Link /> component

```html
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
);

```

```html

import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)
```

What is gatsby-browser.js? Don’t worry about this too much and for now, just know that gatsby-browser.js is one of a handful of special files that Gatsby looks for and uses (if they exist). Here, the naming of the file is important. If you do want to explore more now, check out the [docs](https://www.gatsbyjs.org/docs/browser-apis/).

In gatsby-browser.js

```javascript
import "./src/styles/global.css";

// or:
// require('./src/styles/global.css')
```

siteMetadata can be foun din the gatsby-config.js

---

```html
<div style={{ margin: `3rem auto`, maxWidth: 600 }}>
```

---

### Data in Gatsby

A very computer science-y answer would be: data is things like "strings", integers (42), objects ({ pizza: true }), etc.

For the purpose of working in Gatsby, however, a more useful answer is “everything that lives outside a React component”.

So far, you’ve been writing text and adding images directly in components. Which is an excellent way to build many websites. But, often you want to store data outside components and then bring the data into the component as needed.

If you’re building a site with WordPress (so other contributors have a nice interface for adding & maintaining content) and Gatsby, the data for the site (pages and posts) are in WordPress and you pull that data, as needed, into your components.

Data can also live in file types like Markdown, CSV, etc. as well as databases and APIs of all sorts.

Gatsby’s data layer lets you pull data from these (and any other source) directly into your components—in the shape and form you want.

### GraphQL

= query language

GraphQL was invented at Facebook to help product engineers pull needed data into components.

Page queries live outside of the component definition — by convention at the end of a page component file — and are only available on page components.

For now, keep in mind that only pages can make page queries. Non-page components, such as Layout, can use StaticQuery.

**GraphiQL** is the GraphQL integrated development environment (IDE). It’s a powerful (and all-around awesome) tool you’ll use often while building Gatsby websites.

Data in Gatsby sites can come from anywhere: APIs, databases, CMSs, local files, etc.

When querying a connection of some type, you can pass a variety of arguments to the GraphQL query. You can sort and filter nodes, set how many nodes to skip, and choose the limit of how many nodes to retrieve. With this powerful set of operators, you can select any data you want—in the format you need.

n your index page’s GraphQL query, change allMarkdownRemark to allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }). Note: There are 3 underscores between frontmatter and date. Save this and the sort order should be fixed.

[GraphQL reference guide](https://www.gatsbyjs.org/docs/graphql-reference/)

### Creating new pages has two steps:

1. Generate the “path” or “slug” for the page.
2. Create the page.

You’ve added an implementation of the createPages API which Gatsby calls so plugins can add pages.

As mentioned in the intro to this part of the tutorial, the steps to programmatically creating pages are:

1. Query data with GraphQL
2. Map the query results to pages
