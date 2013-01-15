Soysauce (BETA)
==========================
Original Author: Edward Gaba

About
--------------
Soysauce is a mobile-specific javascript widget library.

Widgets
--------------

These pre-built widgets are simple to use. Some widgets have additional options for extra effects and functionality. To use, you will need to include:

	soysauce.css (found in assets)
	soysauce.js (found in public/javascript)

If you would like to contribute, fork the repo (git@github.com:brandingbrand/soysauce.git) and make pull requests.

### 1) Carousel

Carousels allow for "slideshow" effects for images.

Required Attributes:

	1) data-ss-widget="carousel"
	2) data-ss-component="item"

Usage:

	<div data-ss-widget="carousel">
		<img data-ss-component="item" src="http://placehold.it/600x400/cdcdcd">
		<img data-ss-component="item" src="http://placehold.it/300x200/cdcdcd">
		<img data-ss-component="item" src="http://placehold.it/600x400/cdcdcd">
		<img data-ss-component="item" src="http://placehold.it/600x400/cdcdcd">
	</div>

Additional Options:

	1) autoscroll - timer based autoscrolling, default is 5000ms. To change, use [data-ss-autoscroll-interval="x"]
	2) fullscreen - takes on width of screen
	3) peek - allows item "previewing" on both sides of the main item. modify width with [data-ss-peek-width="x"]
	4) finite - does not continue once you hit the end
	5) noswipe - disables the ability to swipe
	6) zoom - allows the user to zoom in on an item. modify zoom multiplier with [data-ss-zoom-multiplier="x"]

### 2) Accordion

Accordions allow for hiding and showing content when necessary.

Required Attributes:

	1) data-ss-widget="accordion"
	2) data-ss-component="button"
	3) data-ss-component="content"

Usage:

	<div data-ss-widget="accordion" data-ss-options="tab slide">
		<h1 data-ss-component="button">BUTTON</h1>
		<div data-ss-component="content">
			<ul>
				<li>content</li>
				<li>content</li>
				<li>content</li>
				<li>content</li>
			</ul>
		</div>
	</div>

Options:

	1) overlay - provides a transparent overlay behind main content
	2) ajax - transfer JSON information from the same-domain
	3) tab - only one accordion open at a time per group
	4) slide - animate a slidedown effect

### 3) Lateload

Lateloading is an optimization technique. There are two events that get fired as browser processes the page, "DOMContentLoaded", which is fired on the document object, and "load," which is fired on the window object.

The process goes like this:

	1) User hits the page and waits
	2) "DOMContentLoaded" occurs and user can see the page processing
	3) "load" occurs and user doesn't see the page loading anymore

##### "DOMContentLoaded" event

It's recommended load content on this event for hidden, but necessary content such as non-primary images in a carousel.

Usage:

	<img data-ss-dcl-src="/images/brownie.png">

##### "load" event

It's recommended to load all unnecessary images/scripts on this event, such as images in an accordion or images in a popup.

Usage:

	<img data-ss-ll-src="/images/brownie.png">

Notes
--------------
* This widget package requires jQuery 1.7+
