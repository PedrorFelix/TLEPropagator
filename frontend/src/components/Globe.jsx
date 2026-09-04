import React, { useRef } from 'react';
import { Viewer, Entity } from 'resium';
import { Cartesian3, Color } from 'cesium';

// Import Cesium UI styles
import 'cesium/Build/Cesium/Widgets/widgets.css';

export function Globe() {
  const viewerRef = useRef(null);

  // Position coordinates (Longitude, Latitude, Height)
  const samplePosition = Cartesian3.fromDegrees(9.984355,53.541328,  0);

  return (
    <Viewer full ref={viewerRef}>
      {/* Example 3D Point / Pin on the Globe */}
      <Entity
        name="Sample Location"
        position={samplePosition}
        point={{ pixelSize: 12, color: Color.RED }}
        description="Sample Location"
      />
    </Viewer>
  );
}

export default Globe;