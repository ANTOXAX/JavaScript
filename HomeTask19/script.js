var xhr = new XMLHttpRequest();
xhr.open('GET', 'markers.json', true);
xhr.onload = function(){
	var markers = JSON.parse(this.responseText),
		div = document.getElementById('div');

		coords = {lat: 53.905752, lng: 27.554074},

		settings = {
			zoom: 13,
			center: coords,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		},

		map = new google.maps.Map(div, settings),

		path = new Array;

	markers.forEach(function(elem){
		var coords = {lat: elem.lat, lng: elem.lng},

			marker = new google.maps.Marker({
				map: map,
				position: coords
			}),

			infoWindow = new google.maps.InfoWindow({
				content: elem.info
			});

		marker.addListener('click', function() {
        	infoWindow.open(map, marker);
		});

		marker.addListener('mouseout', function(){
			infoWindow.close();
		});

		path.push(coords);
	});

	console.log(path);
	var allPath = new google.maps.Polyline({
			map: map,
    		path: path,
    		strokeColor: '#FF0000',
    		strokeOpacity: 1.0,
    		strokeWeight: 2
  		});
}
xhr.send(null);