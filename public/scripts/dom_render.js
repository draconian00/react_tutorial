ReactDOM.render(
	<CommentBox url="/api/comments" pollInterval={10000} />,
	document.getElementById('content')
);