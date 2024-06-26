var wms_layers = [];


        var lyr_PetaIndonesia_0 = new ol.layer.Tile({
            'title': 'Peta Indonesia',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_StatusHakTanah_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geosrv.atrbpn.go.id/geoserver/ows?authkey%3D4a7725ba-392q-4234-8f85-3951e14d12a3",
    attributions: ' ',
                              params: {
                                "LAYERS": "atrbpn:PersilSigtora",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Status Hak Tanah",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StatusHakTanah_1, 1]);
var lyr_KawasanHutan_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geosrv.atrbpn.go.id/geoserver/umum/wms?version%3D1.1.0%26layers%3Dumum%3APENETAPAN_KAWASAN_HUTAN%26bbox%3D9.0%2C-11.0%2C141.0%2C6.0%26width%3D768%26height%3D330%26srs%3DEPSG%3A4326",
    attributions: ' ',
                              params: {
                                "LAYERS": "PENETAPAN_KAWASAN_HUTAN",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Kawasan Hutan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_KawasanHutan_2, 1]);
var lyr_LahanSawahDilindungi_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geosrv.atrbpn.go.id/geoserver/umum/wms?version%3D1.1.0%26layers%3Dumum%3APENETAPAN_KAWASAN_HUTAN%26bbox%3D9.0%2C-11.0%2C141.0%2C6.0%26width%3D768%26height%3D330%26srs%3DEPSG%3A4326",
    attributions: ' ',
                              params: {
                                "LAYERS": "LSD",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Lahan Sawah Dilindungi",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LahanSawahDilindungi_3, 1]);
var format_BatasWilayahProvJawaBarat_4 = new ol.format.GeoJSON();
var features_BatasWilayahProvJawaBarat_4 = format_BatasWilayahProvJawaBarat_4.readFeatures(json_BatasWilayahProvJawaBarat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahProvJawaBarat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahProvJawaBarat_4.addFeatures(features_BatasWilayahProvJawaBarat_4);
var lyr_BatasWilayahProvJawaBarat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahProvJawaBarat_4, 
                style: style_BatasWilayahProvJawaBarat_4,
                popuplayertitle: "Batas Wilayah Prov Jawa Barat",
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahProvJawaBarat_4.png" /> Batas Wilayah Prov Jawa Barat'
            });

lyr_PetaIndonesia_0.setVisible(true);lyr_StatusHakTanah_1.setVisible(true);lyr_KawasanHutan_2.setVisible(true);lyr_LahanSawahDilindungi_3.setVisible(true);lyr_BatasWilayahProvJawaBarat_4.setVisible(true);
var layersList = [lyr_PetaIndonesia_0,lyr_StatusHakTanah_1,lyr_KawasanHutan_2,lyr_LahanSawahDilindungi_3,lyr_BatasWilayahProvJawaBarat_4];
lyr_BatasWilayahProvJawaBarat_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_BatasWilayahProvJawaBarat_4.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_BatasWilayahProvJawaBarat_4.set('fieldLabels', {'NAMOBJ': 'header label - always visible', });
lyr_BatasWilayahProvJawaBarat_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});