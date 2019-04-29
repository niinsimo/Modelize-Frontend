import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three-full';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @HostListener("window:scroll", ["$event"]) onScrollEvent($event: any) {
    console.log($event);
    console.log("scrolling");
  }

  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube: THREE.Mesh;
  private cube2: THREE.Mesh;


  constructor() { }

  ngOnInit() {
    this.init();
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    let texture = new THREE.TextureLoader().load("models/hydralisk/background.png");
    this.scene.background = texture;

    const loader = new THREE.GLTFLoader();
    loader.load("/models/hydralisk/scene.gltf", gltf => {
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.scale.set(0.05, 0.05, 0.05); // scale here
      this.scene.add(gltf.scene);
    });

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });

    this.camera.position.set(20, 15, 20);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(20, 20, 10);
    const ambientLight = new THREE.AmbientLight(0x707070); // soft white light

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    let geometry = new THREE.BoxGeometry(10, 10, 10);
    let material = new THREE.MeshPhongMaterial({ color: 0x00aaff });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(0, 5, 0);

    let geometry2 = new THREE.BoxGeometry(5, 5, 5);
    let material2 = new THREE.MeshPhongMaterial({ color: 0x00ff0000 });
    this.cube2 = new THREE.Mesh(geometry2, material2);
    this.cube2.position.set(-10, -15, 10);

    this.scene.add(this.camera);
    this.scene.add(directionalLight, ambientLight);

    const controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    // this.cube.rotateOnAxis(new Vector3(0, 1, 0), -0.01)
    // this.cube2.rotateY(-0.01);
    this.renderer.render(this.scene, this.camera);
  }
}
