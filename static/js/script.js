$(document).ready(function(){
    $.ajax({
        url: "http://silently.github.io/fake-api/posts/list.json",
        type: "GET",
        dataType: "json",
        success: function(objects, status){
            for(var key in objects){
                var article = objects[key];
                var postContainer= $("<div clas ='panel panel-default'></div>");
                var picture = $("<img>").attr({
                    src : article.picture
                });
                var title = $("<h2 class='panel-title'></h2>").html(article.title).css({
                    "textTransform": "capitalize"
                });
                var titleContainer = $("<div class='panel-heading'></div>").append(title);
                var tag = "Tags : "
                    for(var i = 0; i < article.tags.length; i++){
                        tag +=  "#" + article.tags[i];
                        if(i < article.tags.length -1){
                            tag += " "
                        }
                    };
                    tag += "."
                var tags = $("<span class='pull-rigth'></span>").html(tag);
                var extract = $("<p></p>").html(article.abstract);
                var author = "By : "
                    for(var i = 0; i < article.authors.length; i++){
                        author += article.authors[i].name;
                        if(i < article.authors.length -1){
                            author += ", ";
                        }
                    };
                author += ".";
                autContainer = $("<p></p>").html(author);
                var gDate = article.created_at.split(" ");
                var uDate = "Posted on : " + new Date(gDate[0]).toDateString() + ".";
                var date = $("<span></span>").html(uDate);
                var postInfos =$("<div class='panel-footer'></div>").append(date, autContainer, tags);
                var post =$("<div class='panel-body'></div>").append(picture, extract);
                postContainer.append(titleContainer, post, postInfos).addClass("post");
                $("#posts").append(postContainer);
            }
        }
    });
});
