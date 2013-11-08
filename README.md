# Decode Sina URLs

Decode Sina url t.cn to complete url using Javascript/jQuery

ex : 

	// deal with links
    links=$("td a"); // get all links
    urls=[];
    
    // loop through links
    for (var i = 0; i < links.length;	 i++) {

    	// collect all urls
    	urls.push($(links[i]).attr("href"));
    }

    // call Sina API to get complete links
	decode_sina_urls(urls,function(long_urls){
		
		// parse & replace link
		for (var i = 0; i < links.length; i++) {
			$(links[i]).text(long_urls[i].url_long);
			$(links[i]).attr("href",long_urls[i].url_long);
		}
		
	});
