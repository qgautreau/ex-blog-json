$(document).ready(function(){
    $.ajax({
        url: "http://silently.github.io/fake-api/posts/list.json",
        type: "GET",
        dataType: "json",
        success: function(objects, status){
            for(var key in objects){
                var article = objects[key];
                var content = $(".panel panel-default");
                var picture = $("<img>").attr({
                    src : article.picture
                });
                var title = $("<h2 class="panel-title"></h2>").html(article.title).css({
                    "textTransform": "capitalize"
                });;
                var titleDiv = $(".panel-heading").append(title);
                var tag = "Tags : "
                    for(var i = 0; i < article.tags.length; i++){
                        tag += article.tags[i];
                        if(i < article.tags.length -1){
                            tag += "|"
                        }
                    };
                var tags = $("<span class="pull-rigth"></span>").html(tag);
                var extract = $("<p></p>").html(article.abstract);
                var author = "By : "
                    for(var i = 0; i < article.authors.length; i++){
                        if(i < article.authors.length -1){
                            author += ", ";
                        }
                    };
                author += ".";
                var date = 0;
                
                console.log(article.title);
            }
        }
    });
});
