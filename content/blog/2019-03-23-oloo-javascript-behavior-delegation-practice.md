---
title: OLOO JS - Behavior Delegation in Practice
date: 2019-03-23T00:08:45.902Z
description: I tried OLOO (Objects linked to other objects)-style Javascript at work. It passed review, but I'm still undecided.
---

## IDKJS
I've been working my way through Kyle Simpson's [YDKJS](https://github.com/getify/You-Dont-Know-JS) and highly recommend giving it a read or three. My understanding of how JS works has improved greatly even if I still have far to go. After completing [Behavior Delegation](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md) I did what any "good" developer would do and tried it at work.

## The Setup
We have a ton of popovers in our app and most of them appear over the trigger element. UI Bootstrap's [popover directive](https://github.com/angular-ui/bootstrap/tree/master/src/popover) makes this extremely easy. Sometimes you might want to have the popover appear over a different element, which was the case in a recent task of mine involving line duplication in our data grid component.

Without going too deep, the design called for a context menu option to duplicate multiple times. When the user clicks it, the menu closes and a number input opens over the row's menu button. I eventually found UI Bootstrap's tooltip positioning logic (popovers inherit from the tooltip service) assumes it opens over the trigger element. No bueno. 

I thought about bastardizing their modal service, but the extra css and hacks to position the element put me off. Instead, I created a factory to spit out popover instances that provide an interface to open/close and to perform an action on close. All the hairy logic is delegated to a popoverHelper service. Terrible name... I know.

## Javascript is so classy...
When it comes to JS classes, I tend to fall into the camp that's not completely sold on them. I don't prefer the prototype-style syntax, but JS still uses prototypal inheritance under the hood, and class obscures this, which creates a lot of frustration for the C# guys I work with. Don't get me wrong, I still use classes, but we should always look for a better way.

Here's what my Popover class would look like:

``` javascript
class Popover() {
    constructor(config) {}  
    $close() {}
    $open() {}
}
```