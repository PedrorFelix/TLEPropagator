import { useRef } from 'react';
import { Viewer, Entity, ImageryLayer } from 'resium';
import { OpenStreetMapImageryProvider, Cartesian3, Color } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css'; // Cesium UI styles


const osmProvider = new OpenStreetMapImageryProvider({
  url: 'https://tile.openstreetmap.org/',
});

export function Globe() {
  const viewerRef = useRef(null);

  // Position coordinates (Longitude, Latitude, Height)
  const samplePosition = Cartesian3.fromDegrees(9.984355,53.541328,  0);

  return (
    <Viewer full 
      ref={viewerRef}
      baseLayer={false}
      baseLayerPicker={false}
      geocoder={false}
      timeline={false}
      animation={false}>
       <ImageryLayer imageryProvider={osmProvider} /> 

      {/* Example Pin Point*/}
      <Entity name="Sample Location"
        position={samplePosition}
        point={{ pixelSize: 12, color: Color.RED }}
        description="Sample Location"
      />


    </Viewer>
  );
}

export default Globe;