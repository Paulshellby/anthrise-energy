import * as THREE from 'three';

/** One unlit background mesh; no sky photographs, shadow maps or post-processing. */
export function createAtmosphericSky() {
  const dayZenith = new THREE.Color(0x7fb4dd);
  const dayHorizon = new THREE.Color(0xd5e4e9);
  const nightZenith = new THREE.Color(0x040e28);
  const nightHorizon = new THREE.Color(0x1c3456);
  const uniforms = {
    zenith: { value: dayZenith.clone() },
    horizon: { value: dayHorizon.clone() },
  };
  const geometry = new THREE.SphereGeometry(160, 16, 8);
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec3 skyDirection;
      void main() {
        skyDirection = normalize(position);
        // Rotation only: background follows the actual view without per-frame transforms.
        gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 zenith;
      uniform vec3 horizon;
      varying vec3 skyDirection;
      void main() {
        float elevation = smoothstep(-0.06, 0.7, normalize(skyDirection).y);
        gl_FragColor = vec4(mix(horizon, zenith, elevation), 1.0);
        #include <colorspace_fragment>
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'CampusAtmosphericSky';
  mesh.frustumCulled = false;
  mesh.renderOrder = -100;
  return {
    mesh,
    setNightFactor(n: number) {
      uniforms.zenith.value.copy(dayZenith).lerp(nightZenith, n);
      uniforms.horizon.value.copy(dayHorizon).lerp(nightHorizon, n);
    },
    dispose() { geometry.dispose(); material.dispose(); },
  };
}
