var googleMap = (function () {
  var init = function () {
    console.log('Подключен Google Map');
  }

  return {
    init: init
  };
})();


var mapGoogle = (function () {
  var init = function () {
    var uluru = {
      lat: 51.514198,
      lng: -0.140328
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru,
      scrollwheel: false,
      styles: [{
          "stylers": [{
              "saturation": -100
            },
            {
              "gamma": 0.8
            },
            {
              "lightness": 4
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "stylers": [{
              "visibility": "on"
            },
            {
              "color": "#5dff00"
            },
            {
              "gamma": 4.97
            },
            {
              "lightness": -5
            },
            {
              "saturation": 100
            }
          ]
        }
      ]
    });


    var icons = {
      position: {
        icon: {
          url: './img/icon/icon-map.png',
          size: new google.maps.Size(79, 97),
          scaledSize: new google.maps.Size(79, 97)
        }
      },
      logo: {
        icon: {
          url: './img/icon/icon-map.png',
          size: new google.maps.Size(79, 97),
          scaledSize: new google.maps.Size(79, 97)
        }
      }
    };
    var features = [{
      position: new google.maps.LatLng(51.514198, -0.140328),
      type: 'position'
    }];

    var infowindow = new google.maps.InfoWindow();

    features.forEach(function (feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map,
        animation: google.maps.Animation.DROP,
        title: feature.contentString
      });
      marker.addListener('click', function () {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
          marker.setAnimation(null);
        }, 1400);
      });
    });
  };

  return {
    init: init
  };
})();

// Инициализация googleMap
if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', mapGoogle.init);
}