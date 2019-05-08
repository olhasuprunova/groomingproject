function initMap() {
            let siliconValley = {lat: 37.3875, lng:-122.0575};
            let mapOptions = {
                center: siliconValley,
                zoom: 10
            };
            let googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
            let marker = new google.maps.Marker({
                position: siliconValley,
                map: googlemap
            });
        }