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
}, 2);
$.jGFeed('http://groups.google.com/group/webian/feed/rss_v2_0_topics.xml', function(feeds){
	// Check for errors
	if(!feeds){
		$("#discussions ul").append("<li>Nothing at the moment</li>");
	}
	// do whatever you want with feeds here
	for(var i=0; i<feeds.entries.length; i++) {
		var entry = feeds.entries[i];
		var d = new Date();
		d.setTime(Date.parse(entry.publishedDate)-28800000);
		// Entry title
		$("#discussions ul").append("<li>"+
			"<a href=\""+entry.link+"\">"+
			entry.title+
			"</a><br />"+
			entry.contentSnippet+
			"<br /><span class=\"datestamp\">"+
			$.timeago(d)+
			"</span></li>");
	}
}, 2);
$.jGFeed('http://webian.org/dev/timeline?format=rss', function(feeds){
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
}, 2);
