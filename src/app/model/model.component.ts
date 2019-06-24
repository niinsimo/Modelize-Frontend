import { Component, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import GLTFLoader from 'three-gltf-loader';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats-js';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})

export class ModelComponent implements OnInit, OnDestroy {

  domElement: HTMLElement;
  private renderer: any;
  private scene: any;
  private camera: any;
  private object: any;

  ngOnInit() {
    this.initThree();
  }

  initThree() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set( 1, 1, 20 );

    //const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
    //camera.position.set( - 1.8, 0.9, 2.7 );
        
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xC5C5C3 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.domElement = renderer.domElement;
    document.body.appendChild(this.domElement);


    renderer.gammaOutput = true;
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( 0, - 0.2, - 0.2 );
    controls.update();

    const stats = new Stats();
		//document.body.appendChild( stats.dom );

    scene.background = new THREE.Color('grey');
    scene.add(camera);

    // Load Light
    const ambientLight = new THREE.AmbientLight( 0xcccccc );
    scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 0, 1, 1 ).normalize();
    scene.add( directionalLight );

    const loader = new GLTFLoader();
    loader.load(
      '../assets/iphone/iphone.gltf', // Resource location (assets folder)
      function ( gltf ) {
        console.log(gltf);

        const object = gltf.scene;
        object.scale.set( 4, 4, 4 );
        object.position.x = 0;	// Position (x = right+ left-)
        object.position.y = 0;	// Position (y = up+, down-)
        object.position.z = 0;

        var SPEED = 0.01;
        object.rotation.x -= SPEED * 2;
        object.rotation.y -= SPEED;
        object.rotation.z -= SPEED * 3;

        scene.add( object );

        renderer.render( scene, camera );
        //this.render;
      },
 
      // Called while loading is progressing
      function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // Called when loading has errors
      function ( error ) {

        scene.dispose();
        document.body.removeChild(renderer.domElement);

        throw Error(error.message);

      }
    );

  }

  ngOnDestroy() {
    if (document.body.contains(this.domElement)) {
      document.body.removeChild(this.domElement);
    }
  }
}
