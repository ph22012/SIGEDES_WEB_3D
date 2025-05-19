const viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: Cesium.Terrain.fromWorldTerrain(),
  timeline: false,
  animation: false,
});

const elSalvadorURL = 'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3AEl%20Salvador&outputFormat=application%2Fjson&maxFeatures=50';

const departamentosURLS = [

  //0 LA LIBERTAD
  //1 LA PAZ  
  //2 SAN SALVADOR

  'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADEPART_LL&outputFormat=application%2Fjson&maxFeatures=50',
  'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADEPART_LP&outputFormat=application%2Fjson&maxFeatures=50',
  'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADEPART_SS&outputFormat=application%2Fjson&maxFeatures=50',
];

const capasPuntosURLS = [

    // mapa_centros_departamento
    // mapa_centros_distrito
    // mapa_centros_municipio  
    
    // mapa_indicador_departamento
    // mapa_indicador_distrito
    // mapa_indicador_municipio

    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3Amapa_centros_departamento&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3Amapa_centros_distrito&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3Amapa_centros_municipio&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3Amapa_indicador_departamento&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3Amapa_indicador_distrito&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3Amapa_indicador_municipio&outputFormat=application%2Fjson&maxFeatures=50',
]

const distritosURLS = [
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADISTRI_LL&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADISTRI_LP&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3ADISTRI_SS&outputFormat=application%2Fjson&maxFeatures=50',
]

const municipiosURLS = [
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3AMUNIS_LL&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3AMUNIS_LP&outputFormat=application%2Fjson&maxFeatures=50',
    'https://geoserver.gg19083.me/geoserver/SIGEDES/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SIGEDES%3AMUNIS_SS&outputFormat=application%2Fjson&maxFeatures=50',
]

const capas = [ 
  {
    id: "CENTROS_DEP",
    url: capasPuntosURLS[0],
    color: Cesium.Color.RED,
  },
  {
    id: "CENTROS_DIS",
    url: capasPuntosURLS[1],
    color: Cesium.Color.RED,
  },
  {
    id: "CENTROS_MUN",
    url: capasPuntosURLS[2],
    color: Cesium.Color.RED,
  },
  {
    id: "INDICADOR_DEP",
    url: capasPuntosURLS[3],
    color: Cesium.Color.WHITE,
  },
  {
    id: "INDICADOR_DIS",
    url: capasPuntosURLS[4],
    color: Cesium.Color.WHITE,
  },
  {
    id: "INDICADOR_MUN",
    url: capasPuntosURLS[5],
    color: Cesium.Color.WHITE,    
  },
  {
    id: "LL_DEP",
    url: departamentosURLS[0],
    color: Cesium.Color.BLUE,
  },
  {
    id: "LP_DEP",
    url: departamentosURLS[1],
    color: Cesium.Color.RED,
  },
  {
    id: "SS_DEP",
    url: departamentosURLS[2],
    color: Cesium.Color.PINK,
  },
  {
    id: "LL_DIS",
    url: distritosURLS[0],
    color: Cesium.Color.BLUE,
  },
  {
    id: "LP_DIS",
    url: distritosURLS[1],
    color: Cesium.Color.RED,
  },
  {
    id: "SS_DIS",
    url: distritosURLS[2],
    color: Cesium.Color.PINK,
  },
  {
    id: "LL_MUN",
    url: municipiosURLS[0],
    color: Cesium.Color.BLUE,
  },
  {
    id: "LP_MUN",
    url: municipiosURLS[1],
    color: Cesium.Color.RED,
  },
  {
    id: "SS_MUN",
    url: municipiosURLS[2],
    color: Cesium.Color.PINK,
  }
];

const dataSources = {};

async function cargarCapas() {
  for (const capa of capas) {
    const ds = await Cesium.GeoJsonDataSource.load(capa.url, {
      stroke: capa.color,
      fill: capa.color.withAlpha(0.5),
      strokeWidth: 2,
      clampToGround: false,
    });

    ds.entities.values.forEach(entity => {
      

      if (entity.polygon) {
        entity.polygon.height = 0;
        entity.polygon.extrudedHeight = 20000;
        entity.polygon.material = capa.color.withAlpha(0.5);
        entity.polygon.outlineColor = capa.color;
      }

      if (entity.polyline) {
        entity.polyline.width = 2;
        entity.polyline.material = capa.color;
      }

      if (!entity.polygon && !entity.polyline) {
        // Si no tiene ni polygon ni polyline, asumimos que es un punto
        entity.point = new Cesium.PointGraphics({
          color: capa.color,
          pixelSize: 10,
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 2,
          heightReference: Cesium.HeightReference.RELATIVE_TO_TERRAIN,
        });
      }
    });

    viewer.dataSources.add(ds);
    dataSources[capa.id] = ds;
  }
}
const ElSalvador = await Cesium.GeoJsonDataSource.load(
  elSalvadorURL, {
  stroke: Cesium.Color.BLACK,
  fill: Cesium.Color.BLUE.withAlpha(0.5),
  strokeWidth: 6,
  markerSymbol: '?',
  clampToGround: true  // importante: no debe estar pegado al terreno
});

viewer.dataSources.add(ElSalvador);
dataSources["El Salvador"] = ElSalvador;


function configurarMenu() {
  const checkboxes = document.querySelectorAll(".layer-checkbox");
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const id = cb.dataset.layer;
      const ds = dataSources[id];
      if (ds) {
        ds.show = cb.checked;
      }
    });
  });
}

// Lógica del modal
document.getElementById("toggleModalBtn").addEventListener("click", () => {
  document.getElementById("layerModal").classList.toggle("hidden");
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("layerModal").classList.add("hidden");
});

// Ejecutar
cargarCapas().then(configurarMenu);

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-89.19137812643355,13.697214555555721,1000000),
});

document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('show');
  });
});

  document.getElementById("desmarcarTodoBtn").addEventListener("click", () => {
    document.querySelectorAll(".layer-checkbox").forEach(checkbox => {
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event("change")); // por si tienes eventos asociados
    });
  });

  document.getElementById("marcarTodoBtn").addEventListener("click", () => {
  document.querySelectorAll(".layer-checkbox").forEach(checkbox => {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event("change"));
  });
});

