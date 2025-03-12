var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_geoMap_geocodedgeoMap_geocoded2copy_1 = new ol.format.GeoJSON();
var features_geoMap_geocodedgeoMap_geocoded2copy_1 = format_geoMap_geocodedgeoMap_geocoded2copy_1.readFeatures(json_geoMap_geocodedgeoMap_geocoded2copy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoMap_geocodedgeoMap_geocoded2copy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoMap_geocodedgeoMap_geocoded2copy_1.addFeatures(features_geoMap_geocodedgeoMap_geocoded2copy_1);
var lyr_geoMap_geocodedgeoMap_geocoded2copy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoMap_geocodedgeoMap_geocoded2copy_1, 
                style: style_geoMap_geocodedgeoMap_geocoded2copy_1,
                popuplayertitle: 'geoMap_geocoded - geoMap_geocoded (2) copy',
                interactive: true,
                title: '<img src="styles/legend/geoMap_geocodedgeoMap_geocoded2copy_1.png" /> geoMap_geocoded - geoMap_geocoded (2) copy'
            });
var format_geoMap_geocodedgeoMap_geocoded2copy_2 = new ol.format.GeoJSON();
var features_geoMap_geocodedgeoMap_geocoded2copy_2 = format_geoMap_geocodedgeoMap_geocoded2copy_2.readFeatures(json_geoMap_geocodedgeoMap_geocoded2copy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoMap_geocodedgeoMap_geocoded2copy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoMap_geocodedgeoMap_geocoded2copy_2.addFeatures(features_geoMap_geocodedgeoMap_geocoded2copy_2);
var lyr_geoMap_geocodedgeoMap_geocoded2copy_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_geoMap_geocodedgeoMap_geocoded2copy_2, 
                radius: 5 * 2,
                gradient: ['#ff0335', '#dd0004', '#760000'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Score';
        var featureWeight = feature.get(weightField);
        var maxWeight = 100;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'geoMap_geocoded - geoMap_geocoded (2) copy'
            });
var format_geoMap_geocodedgeoMap_geocoded2_3 = new ol.format.GeoJSON();
var features_geoMap_geocodedgeoMap_geocoded2_3 = format_geoMap_geocodedgeoMap_geocoded2_3.readFeatures(json_geoMap_geocodedgeoMap_geocoded2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoMap_geocodedgeoMap_geocoded2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoMap_geocodedgeoMap_geocoded2_3.addFeatures(features_geoMap_geocodedgeoMap_geocoded2_3);
var lyr_geoMap_geocodedgeoMap_geocoded2_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_geoMap_geocodedgeoMap_geocoded2_3, 
                radius: 5 * 2,
                gradient: ['#ff0335', '#dd0004', '#760000'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Score';
        var featureWeight = feature.get(weightField);
        var maxWeight = 100;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'geoMap_geocoded - geoMap_geocoded (2)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_geoMap_geocodedgeoMap_geocoded2copy_1.setVisible(true);lyr_geoMap_geocodedgeoMap_geocoded2copy_2.setVisible(true);lyr_geoMap_geocodedgeoMap_geocoded2_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_geoMap_geocodedgeoMap_geocoded2copy_1,lyr_geoMap_geocodedgeoMap_geocoded2copy_2,lyr_geoMap_geocodedgeoMap_geocoded2_3];
lyr_geoMap_geocodedgeoMap_geocoded2copy_1.set('fieldAliases', {'Region': 'Region', 'Score': 'Score', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_geoMap_geocodedgeoMap_geocoded2copy_1.set('fieldImages', {'Region': 'TextEdit', 'Score': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_geoMap_geocodedgeoMap_geocoded2copy_1.set('fieldLabels', {'Region': 'inline label - always visible', 'Score': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_geoMap_geocodedgeoMap_geocoded2copy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});