(function(){$(function(){return $(".feature-list ul li a").on("click",function(){var e,t,i;return e=$(this),t=$("#feature-video iframe"),i=t.attr("src").replace(/[0-9]+/,e.attr("href").replace("#","")),t.attr("src",i),$(".feature-list li a").removeClass("active"),e.addClass("active"),!1})})}).call(this);