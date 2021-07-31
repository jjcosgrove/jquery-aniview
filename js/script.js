$(document).ready(function() {
    var v3Options = {
        animateThreshold: 100
    };

    var v4Options = {
        animateClass: 'animate__animated',
        animateThreshold: 100
    };

    $('.aniview').AniView(v3Options);
    $('.aniview-v4').AniView(v4Options)

    $('.code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
