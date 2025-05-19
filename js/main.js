// Opcional: Cesium ion token (si quieres usar recursos protegidos de Cesium Ion)
// Cesium.Ion.defaultAccessToken = 'your_access_token';

const viewer = new Cesium.Viewer('cesiumContainer', {
  terrain: Cesium.Terrain.fromWorldTerrain(),
  timeline: false,
  animation: false,
});


const geojsonUrl = 'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADEPART_LL&outputFormat=application%2Fjson&maxFeatures=50';

const geojsonDataSource = await Cesium.GeoJsonDataSource.load(geojsonUrl, {
  stroke: Cesium.Color.BLACK,
  fill: Cesium.Color.YELLOW,
  strokeWidth: 3,
  markerSymbol: '?',
  clampToGround: false  // importante: no debe estar pegado al terreno
});

viewer.dataSources.add(geojsonDataSource);

// Elevar cada entidad a 100m
geojsonDataSource.entities.values.forEach(entity => {
  if (entity.polygon) {
    entity.polygon.extrudedHeight = 1000; // para polígonos
    entity.polygon.height = 10000;
  }
  if (entity.position) {
    const cartographic = Cesium.Cartographic.fromCartesian(entity.position.getValue(Cesium.JulianDate.now()));
    entity.position = Cesium.Cartesian3.fromRadians(
      cartographic.longitude,
      cartographic.latitude,
      100
    );
  }
});




// viewer.dataSources.add(Cesium.GeoJsonDataSource.load(
//   geojsonUrl, {
//   stroke: Cesium.Color.RED,
//   fill: Cesium.Color.PINK,
//   strokeWidth: 3,
//   markerSymbol: '?',
//   height: 100,
// }));


async function cargarDatos() {
  try {
    const response = await fetch('https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADEPART_LL&outputFormat=application%2Fjson&maxFeatures=50');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al cargar:', error);
  }
}

cargarDatos();




viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-89.19137812643355,13.697214555555721,1000000),
  // orientation: {
  //   heading: Cesium.Math.toRadians(0.0),
  //   pitch: Cesium.Math.toRadians(-15.0),
  // },
});

// Cargar edificios 3D de OSM
const buildingTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);
