/* ===================================================
 * Popover for DAS right sidebar
 * For Reference see:  
 * ===================================================*/
$(function () {
    $("#example").popover();
});

// To test the @id toggling on password inputs in browsers that don’t support changing an input’s @type dynamically (e.g. Firefox 3.6 or IE), uncomment this:
// $.fn.hide = function() { return this; }
// Then uncomment the last rule in the <style> element (in the <head>).
$(function () {
    // Invoke the plugin
    $('input, textarea').placeholder();
});




$('[rel=popover]').popover({
    trigger: 'manual',
    animate: false,
    placement: 'bottom',
    offset: 5,
    html: true
}).click(function (e) {
    e.preventDefault();

    $('[rel=popover]').each(function () {
        $(this).popover('hide');
    });

    $(this).popover('show');
});

$('.close-popover').live('click', function (e) {
    e.preventDefault();

    $('[rel=popover]').each(function () {
        $(this).popover('hide');
    });
});