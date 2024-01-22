---
layout: page.11ty.cjs
title: <cubix-list> ⌲ Home
---

# &lt;cubix-list>

`<cubix-list>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<cubix-list>` is just an HTML element. You can it anywhere you can use HTML!

```html
<cubix-list></cubix-list>
```

  </div>
  <div>

<cubix-list></cubix-list>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<cubix-list>` can be configured with attributed in plain HTML.

```html
<cubix-list name="HTML"></cubix-list>
```

  </div>
  <div>

<cubix-list name="HTML"></cubix-list>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<cubix-list>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;cubix-list&gt;</h2>
    <cubix-list .name=${name}></cubix-list>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;cubix-list&gt;</h2>
<cubix-list name="lit-html"></cubix-list>

  </div>
</section>
