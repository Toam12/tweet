const input = $("#input") 
const Render = function (){

	const renderPost = function(posts){
		posts = tweeter.getPosts()
		$("#posts").empty()
		for(let post of posts){
			if(post.id === posts.id){
			$("#posts").append(`<div data-id="p">${input.val()}</div>`)
			}
		}
	}

	const renderComment = function (posts){
		$("#posts").empty()
		for(let post of posts){
			if(post.id === posts.id){
				for(let comment of posts.comments){
					if(comment.id === posts.comments.id){
						$("#posts").append(`<div data-id="c" >${input.val()}</div>`)
					}
				}
			}
		}
	}
	
	return{
		renderPost,
		renderComment,
	}
}	
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())