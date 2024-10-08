function initialize() {
    var data_lat, data_lng, data_marker, data_zoom;
    data_lat = jQuery('#map').attr('data-latitude');
    data_lng = jQuery('#map').attr('data-longitude');
    data_zoom = jQuery('#map').attr('data-zoom');
    data_marker = jQuery('#map').attr('data-marker');
    // Create an array of styles.
    var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#bfd9dc"
            },
            {
                "visibility": "on"
            }
        ]
    }
    
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var myLatlng = new google.maps.LatLng(data_lat, data_lng);
    var mapOptions = {
        zoom: parseInt(data_zoom),
        scrollwheel: true,
        center: myLatlng,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    // To add the marker to the map, use the 'map' property
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "",
        icon: data_marker
    });
    // Map Offset
    if (jQuery(window).width() > 768) {
       function pinAdjust(){
        map.panBy(0, 0);
       } pinAdjust();
    }    
    // To add the marker to the map, call setMap();
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);