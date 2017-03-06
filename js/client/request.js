$(function(){				
                $('#select_link').click(function(e){
                    //e.preventDefault();
					var type = 'GET',
						requestData = 'hi',
						contentType = 'application/json',
						url = 'localhost:3000/api',
						callback = publishUser;
						
					server_transport(type, contentType, url);
                });
				
				function publishUser(data) {
				//<div i<div id="[0-2]">
				//	<div id="[0-2]-email">[mail]</div>
				//	<div id="[0-2]-pwd">[pass]</div>
				//</div>
				
					console.log(data);
				};
				
				function server_transport(type, requestData, contentType, url) {
				//console.log(type, requestData, contentType, url, callback);
					$.ajax({
						type: type,
						data: requestData,
				        contentType: contentType,
                        url: url,						
                        success: function(data) {
							console.log(data);
							//callback(data);
                        }
                    });
				}
            });