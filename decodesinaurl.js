// Sina Weibo URL decoder
// decode t.cn to orginal url using Weibo API
// parse t.cn urls to complete urls

// Main function
function decode_sina_urls(urls,callback) {
	// console.log("go decode");
	urls_api=[]
	for (var i = 0; i < urls.length; i++) {
		//limit api call to 20 results each
		if(urls_api.length == urls.length-1 || urls_api.length ==20) {
			call_sina_api_url(urls, function(long_urls){
				callback(long_urls);
			});
			urls_api=[]
		}
		urls_api.push(urls[i])
	}
}

// API Call
function call_sina_api_url (urls, callback) {

	parsed_urls=""
	for (var i = 0; i < urls.length; i++) {
		parsed_urls+="url_short="+urls[i]+"&";
	};

	sina_api_url="https://api.weibo.com/2/short_url/expand.json?access_token=2.00WSLtpB0GRHJ9745670860ceNWWiC&"+parsed_urls;
	
	$.ajax({
		url: sina_api_url,
		type: 'GET',
	    crossDomain: true,
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log("API results :ok");
	    	callback(results.data.urls);
    	},
		fail: function(){
			console.log("Cannot reach sina weibo api");
		}
	})
}