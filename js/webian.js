$.jGFeed('http://webian.org/blog/feed/', function(feeds){
	// Check for errors
	if(!feeds){
		$("#blog ul").append("<li>Nothing at the moment</li>");
	}
	// do whatever you want with feeds here
	for(var i=0; i<feeds.entries.length; i++) {
		var entry = feeds.entries[i];
		var d = new Date();
		d.setTime(Date.parse(entry.publishedDate));
		// Entry title
		$("#blog ul").append("<li>"+
			"<a href=\""+entry.link+"\">"+
			entry.title+
			"</a><br />"+
			entry.contentSnippet+
			"<br /><span class=\"datestamp\">"+
			$.timeago(d)+
			"</span></li>");
	}
}, 3);
$.jGFeed('http://clinked.com/webian/activity/rss', function(feeds){
	// Check for errors
	if(!feeds){
		$("#community ul").append("<li>Nothing at the moment</li>");
	}
	// do whatever you want with feeds here
	for(var i=0; i<feeds.entries.length; i++) {
		var entry = feeds.entries[i];
		var d = new Date();
		d.setTime(Date.parse(entry.publishedDate)-28800000);
		// Entry title
		$("#community ul").append("<li>"+
			"<a href=\""+entry.link+"\">"+
			entry.title+
			"</a><br />"+
			entry.contentSnippet+
			"<br /><span class=\"datestamp\">"+
			$.timeago(d)+
			"</span></li>");
	}
}, 3);
$.jGFeed('https://github.com/webianproject/shell/commits/master.atom', function(feeds){
	// Check for errors
	if(!feeds){
		$("#commits ul").append("<li>Nothing at the moment</li>");
	}
	// do whatever you want with feeds here
	for(var i=0; i<feeds.entries.length; i++) {
		var entry = feeds.entries[i];
		var d = new Date();
		d.setTime(Date.parse(entry.publishedDate));
		// Entry title
		$("#commits ul").append("<li>"+
			"<a href=\""+entry.link+"\">"+
			entry.title+
			"</a><br />"+
			entry.contentSnippet+
			"<br /><span class=\"datestamp\">"+
			$.timeago(d)+
			"</span></li>");
	}
}, 3);
