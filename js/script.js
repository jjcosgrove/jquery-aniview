$(document).ready(function() {
    var options = {
        animateThreshold: 100
    };
    $('.aniview').AniView(options);

    $('.code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
