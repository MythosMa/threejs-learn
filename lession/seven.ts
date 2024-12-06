import { LessionBasic } from "./lessionBasic";
import * as THREE from "three";

export class LessionSeven extends LessionBasic {
  cube: THREE.Mesh;
  material: THREE.ShaderMaterial;
  geometry: THREE.BoxGeometry;
  constructor() {
    super();
  }

  init() {
    super.init();

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0xffffff) },
        color2: { value: new THREE.Color(0xff0000) },
      },
      vertexShader: `
            varying vec3 vPosition;
            void main() {
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
      fragmentShader: `
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec3 vPosition;
            void main() {
                gl_FragColor = vec4(mix(color1, color2, vPosition.y + 0.5), 1.0);
            }
        `,
    });

    this.geometry = new THREE.BoxGeometry(2, 2, 2);
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
  }

  animate() {
    super.animate();
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }
}
