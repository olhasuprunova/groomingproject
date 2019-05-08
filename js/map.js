function initMap() {
            var siliconValley = {lat: 37.3875, lng:-122.0575};
            var mapOptions = {
                center: siliconValley,
                zoom: 10
            };
            var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
            var marker = new google.maps.Marker({
                position: siliconValley,
                map: googlemap
            });
        }