import { Component, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import GLTFLoader from 'three-gltf-loader';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})

export class ModelComponent implements OnInit, OnDestroy {

  domElement: HTMLElement;

  ngOnInit(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set( 1, 1, 20 );
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setClearColor( 0xC5C5C3 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.domElement = renderer.domElement;
    document.body.appendChild(this.domElement);

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
      '', // Resource location (assets folder)
      function ( gltf ) {
        console.log(gltf);

        const object = gltf.scene;
        object.scale.set( 4, 4, 4 );
        object.position.x = 0;	// Position (x = right+ left-)
        object.position.y = 0;	// Position (y = up+, down-)
        object.position.z = 0;

        scene.add( object );

        renderer.render( scene, camera );

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
