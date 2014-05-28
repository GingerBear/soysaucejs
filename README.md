# Soysauce (v1.3.24)
Original Author: Edward Gaba

Soysauce is a customizable javascript widget library. Popular widgets included are carousels and accordions. Please file any issues you find in Github and visit the [Soysauce website](http://www.soysaucejs.com/) for full documentation of the widgets:

## Installation - HTML
* Compressed (25.26 KB) - http://divgzeiu68c7e.cloudfront.net/soysauce/v1.3.24/soysauce.min.js
* Uncompressed (45.82 KB) - http://divgzeiu68c7e.cloudfront.net/soysauce/v1.3.24/soysauce.js
* CSS (12.59 KB) - http://divgzeiu68c7e.cloudfront.net/soysauce/v1.3.24/soysauce.css

You will need to include both the CSS and JS file (use the CDN links above). jQuery is a pre-requisite and will be need to be inserted before Soysauce in the DOM.

## Installation - Bower
Simply run `bower install soysaucejs`. The CSS and JS will need to be included. Example with your bower components folder named 'vendor':
```
<link rel="stylesheet" type="text/css" href="/vendor/soysaucejs/assets/soysauce.css">
<script src="/vendor/soysaucejs/public/soysauce.js"></script>
```

## Contribute
You will need the following pre-requisites:

* [ruby](https://www.ruby-lang.org/en/downloads/) or [rvm](https://rvm.io/rvm/install)

* [compass gem](http://compass-style.org/install/)
```
gem update --system
gem install compass
```

* [bower](http://bower.io/)
```
npm install -g bower
```

1) Install your packages:
```
npm install
```

2) Start the local development server:
```
gulp
```

The following assets will be served on port 5000 and can be found in the public directory:
* [soysauce.js](http://localhost:5000/public/soysauce.js)
* [soysauce.min.js](http://localhost:5000/public/soysauce.min.js)
* [soysauce.css](http://localhost:5000/public/soysauce.css)

The widget javascript files can be found under `./assets/javascript/soysauce`

The css files can be found under `./assets/stylesheets/soysauce`
