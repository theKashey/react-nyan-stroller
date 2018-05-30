<div align="center">
  <h1>Nyanyanyanyanyanyanya! 🙀</h1>
  Nyan Cat React Custom Scroll Bar
  <br/>
  <img src="./assets/cat.gif" alt="Cat!" height="80" align="center"/>
  <br/>  
  <a href="https://www.npmjs.com/package/react-nyan-stroller">
   <img src="https://img.shields.io/npm/v/react-nyan-stroller.svg?style=flat-square" />
  </a>
  
  as seen on [TV](https://www.youtube.com/watch?v=wZZ7oFKsKzY), [Atom](https://atom.io/packages/nyancat-scroll), Vim, and [Google Developer](https://developers.google.com/web/updates/2017/03/custom-scrollbar)
  <br/>  
  <img src="./assets/cat-strolling.gif" alt="strolling" height="61" align="center"/>
</div>  

-----
Based on [react-stroller](https://github.com/theKashey/react-stroller), as long who can better stroll your pages than Cat?
Support vertical, horizontal, mixed(horizontal view reflecting vertical scroll) scrolling and dragging.
For a page or any scrollable container.
[Demo](https://codesandbox.io/s/mm5xq5kv5y) 

# API
Nyan-stroller just overrides `scrollBar` property of react-stroller. Library exposes 3 components.

* __NyanStrollBarComponent__ - nyan scroll bar component for React-stroller.
* __NyanStrollBar__ - standalone scrollbar, to be used on body
* __NyanStrollContainer__ - stroller container with nyan scroll bar inside.

## Example
> Just dont forget - this is not "sTroll" - this is "sTroll". Nyan is strolling.

- this will produce "horizontal" cat-scroller, reacting to the vertical scroll, in position:fixed location.
Will not work if something _scrollable_ exists between ScrollBar and document body.

Do __not__ use this component for any other case due to performance issues and `fixed` position.
```js
import { NyanStrollBar } from 'react-nyan-stroller';

<NyanStrollBar draggable targetAxis="horizontal" />
{/* if not work - apply override styles */}
<NyanStrollBar draggable axis="vertical" targetAxis="horizontal" overrideLocation="fixed"  />
``` 

- this will produce "vertical" cat-scroller, container. Just place `NyanStrollContainer` inside any "fixed size" block. 
```js
import { NyanStrollContainer } from 'react-nyan-stroller';

<div style={{height:200}}>
  <NyanStrollContainer draggable >
    your content
  </NyanStrollContainer>
</div>
```

For rest of the possible options - see [react-stroller](https://github.com/theKashey/react-stroller)  

## Size
 Animated Nyan itself is 4kb. Plus 4 kb for stroller and faste. Result - around 9kb of 🌈🙀.
  
# Licence 
MIT