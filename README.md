<div align="center">
  <h1>Nyanyanyanyanyanyanya! 🙀</h1>
  Nyan Cat React Custom Scroll Bar
  <br/>
  <img src="./asserts/cat.gif" alt="Cat!" height="80" align="center"/>
  
  <a href="https://www.npmjs.com/package/react-nyan-stroller">
   <img src="https://img.shields.io/npm/v/react-nyan-stroller.svg?style=flat-square" />
  </a>
  
  <br/>  
</div>  

-----
Based on [react-stroller](https://github.com/theKashey/react-stroller), as long who can better stroll your pages than Cat?
[Demo](https://codesandbox.io/s/mm5xq5kv5y) 

# API
Nyan-stroller just overrides `scrollBar` property of react-stroller. Library exposes 3 components.

* __NyanScrollBarComponent__ - nyan scroll bar component for React-stroller.
* __NyanScrollBar__ - standalone scrollbar, to be used on body
* __NyanScrollContainer__ - stroller container with nyan scroll bar inside.

## Example

- this will produce "horizontal" cat-scroller, reacting to the vertical scroll, in position:fixed location.
Will not work if something _scrollable_ exists between ScrollBar and document body.

Do __not__ use this component for any other case due to performance issues and `fixed` position.
```js
import { NyanScrollBar } from 'react-nyan-stroller';

<NyanScrollBar draggable targetAxis="horizontal" />
{/* if not work - apply override styles */}
<NyanScrollBar draggable axis="vertical" targetAxis="horizontal" overrideLocation="fixed"  />
``` 

- this will produce "vertical" cat-scroller, container. Just place `NyanScrollContainer` inside any "fixed size" block. 
```js
import { NyanScrollContainer } from 'react-nyan-stroller';

<div style={{height:200}}>
  <NyanScrollContainer draggable >
    your content
  </NyanScrollContainer>
</div>
```

For rest of the possible options - see [react-stroller](https://github.com/theKashey/react-stroller)  

## Size
 Animated Nyan itself is 4kb. Plus 4 kb for stroller and faste. Result - around 9kb of 🌈🙀.
  
# Licence 
MIT