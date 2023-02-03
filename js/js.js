$(function () {
    setNavigation();
  });
  
  function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\//g, "");
    path = decodeURIComponent(path);
    
    $("#menu-main-menu a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });
  }
