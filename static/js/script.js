$(document).ready(function(){
    $.ajax({
        url: "http://silently.github.io/fake-api/posts/list.json",
        type: "GET",
        dataType: "json",
        success: function(objects, status){
            for(var key in objects){
                var article = objects[key];
                var picture = $("<img>").attr({
                    src : article.picture
                });
                var title = $("<h2>");
                var tags =0;
                var extract =0;
                var author =0;
                var date =0;
                console.log(article.title);
            }
        }
    });
});
