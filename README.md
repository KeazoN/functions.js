# Hello My Friend

I made a few commands that people can define and use the function file in their file. I hope it will be useful. It will be updated daily.

---

# Infrastructure

This infrastructure is prepared with JavaScript. You can use these functions with basic JavaScript knowledge.


---

## How To Use?

### 1. Install function.js

Download the function.js file, put it in the source file in your project.

### 2. Include in the page

Include in your page with import or script and access all commands, WoW

---

## Sample

```js
	function darkAndLight(){
		document.body.classList.toggle("dark-mode");
	}
```
```html
	<button onClick="darkAndLight()">Dark Mode and Light Mode</button>
	<script src="source/function.js"></script>
```
```css
	body{
		background-color: #fff;
	}
	.dark-mode{
		background-color: #111;
	}
```

---

## Functions, Ids and Classes

 * Function:
    * darkAndLight() = It is added with onClick. The result of styling with CSS on the page will be dark theme and light theme. You can also use CSS with ".dark-mode".
    
 * Ids
 	* stickNav = The ID of the nav tag. Using this ID the navbar will break the barrier above and stay above with "top 0".
 	* writeSecond = You can call the currently found second by giving an ID value to a tag you want.
 	* writeMinute = You can call the currently found minute by giving an ID value to a tag you want.
 	* writeHour = You can call the currently found hour by giving an ID value to a tag you want.
 	* writeDay = You can call the currently found day by giving an ID value to a tag you want.
 	* writeMonth = You can call the currently found month by giving an ID value to a tag you want.
 	* writeYear = You can call the currently found year by giving an ID value to a tag you want.
