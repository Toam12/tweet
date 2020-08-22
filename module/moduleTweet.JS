const posts = [
	{
		text: "First post!",
		id: "p1",
		comments: [
			{ id: "c1", text: "First comment on first post!" },
			{ id: "c2", text: "Second comment on first post!!" },
			{ id: "c3", text: "Third comment on first post!!!" }
		]
	},
	{
		text: "Aw man, I wanted to be first",
		id: "p2",
		comments: [
			{ id: "c4", text: "Don't wory second poster, you'll be first one day." },
			{ id: "c5", text: "Yeah, believe in yourself!" },
			{ id: "c6", text: "Haha second place what a joke." }
		]
	}
]


let c = 7
let p = 3

const Tweeter = function () {

	const getPosts = () => {
		return posts
	}

	const addPost = (text) => {
		const post = {
			text: `${text}`,
			id: "p" + p++,
			comments: []
		}
		posts.push(post);
		return post.id
	}

	const addComment = (text, postId) => {

		for (let post of posts) {
			if (post.id === postId) {
				const comment = { id: "c" + c++, text: `${text}` }
				post.comments.push(comment);
			}
		}
	}

	const removePosts = (postId) => {
		for (let pIndex in posts) {
			if (posts[pIndex].id === postId) {
				posts.splice(pIndex, 1)
			}
		}
	}

	const removeComments = (postId, commentId) => {
		for (let pIndex in posts) {
			if (posts[pIndex].id === postId) {
				for (let cIndex in posts[pIndex].comments) {
					if (posts[pIndex].comments[cIndex].id === commentId) {
						posts[pIndex].comments.splice(cIndex, 1)
					}
				}
			}
		}
	}

	return {
		getPosts,
		addPost,
		addComment,
		removePosts,
		removeComments,
	}
}
// =============================
const tweeter = Tweeter()
let postId = tweeter.addPost()
// =============================

postId = tweeter.addPost("hello")
tweeter.addComment("i knew that i can make it", postId)

console.log(tweeter.getPosts())