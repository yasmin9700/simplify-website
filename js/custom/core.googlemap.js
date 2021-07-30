function themerex_googlemap_init(dom_obj, coords) {
    "use strict";
    if (typeof THEMEREX_GLOBALS['googlemap_init_obj'] == 'undefined') themerex_googlemap_init_styles();
    THEMEREX_GLOBALS['googlemap_init_obj'].geocoder = '';
    try {
        var id = dom_obj.id;
        THEMEREX_GLOBALS['googlemap_init_obj'][id] = {
            dom: dom_obj,
            markers: coords.markers,
            geocoder_request: false,
            opt: {
                zoom: coords.zoom,
                center: null,
                scrollwheel: false,
                scaleControl: false,
                disableDefaultUI: false,
                panControl: true,
                zoomControl: true, //zoom
                mapTypeControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                styles: THEMEREX_GLOBALS['googlemap_styles'][coords.style ? coords.style : 'default'],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        };

        themerex_googlemap_create(id);

    } catch (e) {

        dcl(THEMEREX_GLOBALS['strings']['googlemap_not_avail']);

    };
}

function themerex_googlemap_create(id) {
    "use strict";

    // Create map
    THEMEREX_GLOBALS['googlemap_init_obj'][id].map = new google.maps.Map(THEMEREX_GLOBALS['googlemap_init_obj'][id].dom, THEMEREX_GLOBALS['googlemap_init_obj'][id].opt);

    // Add markers
    for (var i in THEMEREX_GLOBALS['googlemap_init_obj'][id].markers)
        THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].inited = false;
    themerex_googlemap_add_markers(id);

    // Add resize listener
    jQuery(window).resize(function() {
        if (THEMEREX_GLOBALS['googlemap_init_obj'][id].map)
            THEMEREX_GLOBALS['googlemap_init_obj'][id].map.setCenter(THEMEREX_GLOBALS['googlemap_init_obj'][id].opt.center);
    });
}

function themerex_googlemap_add_markers(id) {
    "use strict";
    for (var i in THEMEREX_GLOBALS['googlemap_init_obj'][id].markers) {

        if (THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].inited) continue;

        if (THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].latlng == '') {

            if (THEMEREX_GLOBALS['googlemap_init_obj'][id].geocoder_request !== false) continue;

            if (THEMEREX_GLOBALS['googlemap_init_obj'].geocoder == '') THEMEREX_GLOBALS['googlemap_init_obj'].geocoder = new google.maps.Geocoder();
            THEMEREX_GLOBALS['googlemap_init_obj'][id].geocoder_request = i;
            THEMEREX_GLOBALS['googlemap_init_obj'].geocoder.geocode({
                address: THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].address
            }, function(results, status) {
                "use strict";
                if (status == google.maps.GeocoderStatus.OK) {
                    var idx = THEMEREX_GLOBALS['googlemap_init_obj'][id].geocoder_request;
                    if (results[0].geometry.location.lat && results[0].geometry.location.lng) {
                        THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[idx].latlng = '' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng();
                    } else {
                        THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[idx].latlng = results[0].geometry.location.toString().replace(/\(\)/g, '');
                    }
                    THEMEREX_GLOBALS['googlemap_init_obj'][id].geocoder_request = false;
                    themerex_googlemap_add_markers(id);
                } else
                    dcl(THEMEREX_GLOBALS['strings']['geocode_error'] + ' ' + status);
            });

        } else {

            // Prepare marker object
            var latlngStr = THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].latlng.split(',');
            var markerInit = {
                map: THEMEREX_GLOBALS['googlemap_init_obj'][id].map,
                position: new google.maps.LatLng(latlngStr[0], latlngStr[1]),
                clickable: THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].description != ''
            };
            if (THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].point) markerInit.icon = THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].point;
            if (THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].title) markerInit.title = THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].title;
            THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].marker = new google.maps.Marker(markerInit);

            // Set Map center
            if (THEMEREX_GLOBALS['googlemap_init_obj'][id].opt.center == null) {
                THEMEREX_GLOBALS['googlemap_init_obj'][id].opt.center = markerInit.position;
                THEMEREX_GLOBALS['googlemap_init_obj'][id].map.setCenter(THEMEREX_GLOBALS['googlemap_init_obj'][id].opt.center);
            }

            // Add description window
            if (THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].description != '') {
                THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].infowindow = new google.maps.InfoWindow({
                    content: THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].description
                });
                google.maps.event.addListener(THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].marker, "click", function(e) {
                    var latlng = e.latLng.toString().replace("(", '').replace(")", "").replace(" ", "");
                    for (var i in THEMEREX_GLOBALS['googlemap_init_obj'][id].markers) {
                        if (latlng == THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].latlng) {
                            THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].infowindow.open(
                                THEMEREX_GLOBALS['googlemap_init_obj'][id].map,
                                THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].marker
                            );
                            break;
                        }
                    }
                });
            }

            THEMEREX_GLOBALS['googlemap_init_obj'][id].markers[i].inited = true;
        }
    }
}

function themerex_googlemap_refresh() {
    "use strict";
    for (id in THEMEREX_GLOBALS['googlemap_init_obj']) {
        themerex_googlemap_create(id);
    }
}

function themerex_googlemap_init_styles() {
    // Init Google map
    THEMEREX_GLOBALS['googlemap_init_obj'] = {};
    THEMEREX_GLOBALS['googlemap_styles'] = {
        'default': [{
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f7f1df"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#d0e3b4"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbd3da"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#bde6ab"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffe15f"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#efd151"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "black"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#cfb2db"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#a2daf2"
            }]
        }],
        'invert': [{
            "stylers": [{
                "invert_lightness": true
            }, {
                "visibility": "on"
            }]
        }],
        'medicine': [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#91d5e4"
            }, {
                "visibility": "on"
            }]
        }],
        'law': [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "hue": "#ffaa00"
            }, {
                "saturation": "-33"
            }, {
                "lightness": "10"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9c5e18"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "saturation": "-23"
            }, {
                "gamma": "2.01"
            }, {
                "color": "#f2f6f6"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [{
                "saturation": "-14"
            }]
        }],
        'beauty': [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f5bfbf"
            }, {
                "lightness": "10"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#b0e3f0"
            }, {
                "visibility": "on"
            }, {
                "lightness": "38"
            }]
        }],

        'greyscale': [{
            "stylers": [{
                "saturation": -100
            }]
        }],
        'greyscale2': [{
            "featureType": "landscape",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 20.4705882352941
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 25.59999999999998
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": -22
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 21.411764705882348
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 21.411764705882348
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 4.941176470588232
            }, {
                "gamma": 1
            }]
        }],
        'style1': [{
            "featureType": "landscape",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 20.4705882352941
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 25.59999999999998
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": -22
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 21.411764705882348
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 21.411764705882348
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "hue": "#FF0300"
            }, {
                "saturation": -100
            }, {
                "lightness": 4.941176470588232
            }, {
                "gamma": 1
            }]
        }],
        'style2': [{
            "featureType": "landscape",
            "stylers": [{
                "hue": "#007FFF"
            }, {
                "saturation": 100
            }, {
                "lightness": 156
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "hue": "#FF7000"
            }, {
                "saturation": -83.6
            }, {
                "lightness": 48.80000000000001
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "hue": "#FF7000"
            }, {
                "saturation": -81.08108108108107
            }, {
                "lightness": -6.8392156862745
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "hue": "#FF9A00"
            }, {
                "saturation": 7.692307692307736
            }, {
                "lightness": 21.411764705882348
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "hue": "#0093FF"
            }, {
                "saturation": 16.39999999999999
            }, {
                "lightness": -6.400000000000006
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "hue": "#00FF60"
            }, {
                "saturation": 17
            }, {
                "lightness": 44.599999999999994
            }, {
                "gamma": 1
            }]
        }],
        'style3': [{
            "featureType": "landscape",
            "stylers": [{
                "hue": "#FFA800"
            }, {
                "saturation": 17.799999999999997
            }, {
                "lightness": 152.20000000000002
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "hue": "#007FFF"
            }, {
                "saturation": -77.41935483870967
            }, {
                "lightness": 47.19999999999999
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "hue": "#FBFF00"
            }, {
                "saturation": -78
            }, {
                "lightness": 39.19999999999999
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "hue": "#00FFFD"
            }, {
                "saturation": 0
            }, {
                "lightness": 0
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "hue": "#007FFF"
            }, {
                "saturation": -77.41935483870967
            }, {
                "lightness": -14.599999999999994
            }, {
                "gamma": 1
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "hue": "#007FFF"
            }, {
                "saturation": -77.41935483870967
            }, {
                "lightness": 42.79999999999998
            }, {
                "gamma": 1
            }]
        }]
    }
}