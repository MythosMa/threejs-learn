import * as THREE from "three";
import { LessionBasic } from "./lessionBasic";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export class LessionSix extends LessionBasic {
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  cube: THREE.Mesh;

  composer: EffectComposer;
  renderPass: RenderPass;
  bloomPass: UnrealBloomPass;

  constructor() {
    super();
  }

  init() {
    super.init();
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(this.geometry, this.material);

    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1, // 强度
      16, // 半径
      0.7 // 阈值
    );

    this.scene.add(this.cube);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
  }

  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.composer.render();
  }
}
