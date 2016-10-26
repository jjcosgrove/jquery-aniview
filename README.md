# jQuery AniView

A jQuery plugin that works in harmony with animate.css in order to enable animations only when content comes into view.

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
<script src="https://unpkg.com/jquery-aniview/dist/jquery.aniview.js">
```

For maximum security you may also decide to:

* reference a specific version of jQuery AniView

* [generate a SRI hash](https://www.srihash.org/) of that version and use it to ensure integrity

* set the [CORS settings attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) to make anonymous requests to CDN

Example:

```HTML
<script src="https://unpkg.com/jquery-aniview@1.0.1/dist/jquery.aniview.js"
integrity="sha384-zDA6q/t525x7f6KD/OaOe24vCxSPU3eraILc2NU+ZA7ISsc3ExQbj8PB56FRMq6H"
crossorigin="anonymous"></script>
```

## Initialisation
```JavaScript
$('.aniview').AniView();
```
## Options
```JavaScript
var options = {
    animateThreshold: 100,
    scrollPollInterval: 50
}
$('.aniview').AniView(options);
```
Option  | Type | Description |  Default
------------- | ------------- | ------------- | -------------
animateThreshold  | int | +ve numbers delay the animation sequence until the specified number pixels have come into view. -ve numbers will trigger the animation sequence prior to the element coming into view. | 0
scrollPollInterval  | int | The frequency at which the user scrolling is 'polled' i.e. tested. This is in milliseconds (ms) and is an extension jQuery's in-built 'scroll' event/handler. | 20
## Markup
```HTML
<div class="aniview" data-av-animation="slideInRight"></div>
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
    <link type="text/css" rel="stylesheet" href="animate.css">
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="jquery.aniview.js"></script>
    <script>
        $(document).ready(function(){
            $('.aniview').AniView();
        });
    </script>
</head>
<body>
    <div>
        <p class="aniview" data-av-animation="slideInRight">
            This is my awesome animated element!
        </p>
    </div>
</body>
</html>
```
## Notes

Any element already in the viewport when the user loads the page will have it's animation triggered imediately if one has been set. In other words, it will not wait for the user to begin scrolling before initiating the animation on these elements.

## Contribute

Bugs or feature requests/contributions can be done via:

[https://github.com/jjcosgrove/jquery-aniview/issues](https://github.com/jjcosgrove/jquery-aniview/issues)

## Authors

* Just me for now.
