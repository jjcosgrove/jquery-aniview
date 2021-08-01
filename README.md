# jQuery AniView

A jQuery plugin that works in harmony with animate.css in order to enable animations only when content comes into view. Now supports v4.x of animate.css

## Demo

http://jjcosgrove.github.io/jquery-aniview/

## Installation (via npm)

```Shell
npm install jquery-aniview
```

## CDN

Instead of a local installation you may request a remote copy of jQuery AniView from [unpkg CDN](https://unpkg.com/).

To request the latest version, use the following:

```HTML
<script src="https://unpkg.com/jquery-aniview/dist/jquery.aniview.js"></script>
```

For maximum security you may also decide to:

* reference a specific version of jQuery AniView

* [generate a SRI hash](https://www.srihash.org/) of that version and use it to ensure integrity

* set the [CORS settings attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) to make anonymous requests to CDN

Example:

```HTML
<script src="https://unpkg.com/jquery-aniview@1.0.3/dist/jquery.aniview.js" integrity="sha384-uvboBeyPkVGldyoicVJST1JEAbxI2W0lG2fFOyGvahZrC4jWiv0vmryxw9NXIEn6" crossorigin="anonymous"></script>
```

## Initialisation
```JavaScript
$('.aniview').AniView();
```
## Options
```JavaScript
var options = {
    animateClass: 'animated',
    animateThreshold: 100,
    scrollPollInterval: 50
}
$('.aniview').AniView(options);
```
Option  | Type | Description |  Default
------------- | ------------- | ------------- | -------------
animateClass | string | the animate.css class to use: 'animated' enables v3.x support and 'animate__animated' to enable v4.x support | animated
animateThreshold  | int | +ve numbers delay the animation sequence until the specified number of pixels have come into view. -ve numbers will trigger the animation sequence prior to the element coming into view. | 0
scrollPollInterval  | int | The frequency at which user scrolling is 'polled' i.e. tested. This is in milliseconds (ms) and is an extension to jQuery's in-built 'scroll' event/handler. | 20
## Markup v3
```HTML
<div class="aniview" data-av-animation="slideInRight"></div>
```

## Markup v4
```HTML
<div class="aniview" data-av-animation="animate__jackInTheBox"></div>
```

## Full Example

A typical working example (minimal) might look something like this:

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My AniView Page</title>
    <!-- use the correct 'animateClass' option for your version! -->
    <link type="text/css" rel="stylesheet" href="animate.css">
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="jquery.aniview.js"></script>
    <script>
        $(document).ready(function(){
            $('.aniview-v3').AniView();
            $('.aniview-v4').AniView({
                animateClass: 'animate__animated'
            });
        });
    </script>
</head>
<body>
    <div>
        <p class="aniview-v3" data-av-animation="slideInRight">
            This is my awesome animated element using v3!
        </p>
        <p class="aniview-v4" data-av-animation="animate__jackInTheBox">
            This is my awesome animated element using v4!
        </p>
    </div>
</body>
</html>
```
## Notes

Any element already in the viewport when the user loads the page will have it's animation triggered immediately if one has been set. In other words, it will not wait for the user to begin scrolling before initiating the animation on these elements.

## Contribute

Bugs or feature requests/contributions can be done via:

[https://github.com/jjcosgrove/jquery-aniview/issues](https://github.com/jjcosgrove/jquery-aniview/issues)

## Authors

* Just me for now.
