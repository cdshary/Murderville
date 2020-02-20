var homicideJson = "static/js/homicide.json";

console.log(homicideJson)
// Get data and send to function
d3.json(homicideJson, function(data) {
    createFeatures(data.data.homicides);
  });
  
  function createFeatures(homicideData) {
  
    // Define map layers
    var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    });
  
    var darkMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetMap.org/\">OpenstreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.dark",
      accessToken: API_KEY
    });

  
  //Create cirle array
  // Initialize an array to hold murder markers
  var murderMarkers = [];

    // Loop through the homcicides array
    for (var i = 0; i < homicideData.length; i++) {

        coordinates = [homicideData[i].lat, homicideData[i].lon];
        num_incidents = homicideData[i].num_incidents;
        cities = homicideData[i].City;
        mean_income = homicideData[i].mean_income;
        grad_rate_percentage = homicideData[i].grad_rate_percentage

        if (num_incidents <100) {
        color = 'yellowgreen';
        }
        else if (num_incidents <800) {
        color = 'green'
        }
        else if (num_incidents <1500) {
        color = 'yellow'
        }
        else if (num_incidents <2000) {
        color = 'orange'
        }
        else if (num_incidents <3000) {
        color = 'red'
        }
        else {
        color = "darkred"
        }  

        var murderMarker = L.circle(coordinates, {
            fillOpacity: 0.75,
            color: color,
            fillColor: color,
            radius: (num_incidents * 10)
        }).bindPopup("<h3>" + cities + "<h3><h3>There have been "
         + num_incidents + " murder(s) here!</h3> <hr> <p>Average income: $" + mean_income 
         + "</p>" + "<p> Percentage of HS Grads: " + grad_rate_percentage + "%</p>");
        // Add the marker to the murderMarkers array
        murderMarkers.push(murderMarker);
        console.log(murderMarkers)
    }
    
    //Earthquake layer
    var murderLayer = L.layerGroup(murderMarkers);
    
    // Define a baseMaps object
    var baseMaps = {
      "Light Map": lightMap,
      "Dark Map": darkMap,
    };
  
    // Create overlay object to hold overlay layer
    var overlayMaps = {
      "Murderous Cities": murderLayer
    };
  
    var myMap = L.map("map", {
      center: [36.5323, -116.9325],
      zoom: 7,
      layers: [lightMap, murderLayer]
    });
  
    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);


    // // Add legend to the map
    var legend = L.control({
        position: "bottomright"
      });
    
    
      legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
    
        var murders = [0, 100, 800, 1500, 2000, 3000];

        var colors = [
          "yellowgreen",
          "green",
          "yellow",
          "orange",
          "red",
          "darkred"
        ];
    
    
        for (var i = 0; i < murders.length; i++) {
          div.innerHTML += "<i style='background: " + colors[i] + "'></i> " +
            murders[i] + (murders[i + 1] ? "&ndash;" + murders[i + 1] + "<br>" : "+");
        }
        return div;
      };
    
      legend.addTo(myMap);
  }

