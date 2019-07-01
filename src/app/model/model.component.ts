import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats-js';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})

export class ModelComponent implements OnInit, OnDestroy {
  contentHeight: number;
  domElement: HTMLElement;

  ngOnInit() {
    this.createScene();
  }

  createScene() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set( 1, 1, 20 );
    camera.lookAt( scene.position );

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor( 0xC5C5C3 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.gammaOutput = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.domElement = renderer.domElement;
    document.body.appendChild(this.domElement);


    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( 0, - 0.2, - 0.2 );
    controls.update();

    const stats = new Stats();
		//this.container.appendChild( stats.dom );

    scene.background = new THREE.Color('grey');
    scene.add(camera);

    // Load Light
    const ambientLight = new THREE.AmbientLight( 0xcccccc );
    scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 0, 1, 1 ).normalize();
    scene.add( directionalLight );

    //animates object
    animate();
    function animate() {

      requestAnimationFrame( animate );
      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();
    
      renderer.render( scene, camera );
    
    }

    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize( ) {

        camera.aspect = window.innerWidth / window.innerHeight;
        // adjust the FOV
        camera.fov = ( 360 / Math.PI ) * Math.atan( ( window.innerHeight / window.innerHeight ) );
        camera.updateProjectionMatrix();
        camera.lookAt( scene.position );
        renderer.setSize( window.innerWidth , window.innerHeight );
        renderer.render( scene, camera );
        
    }

    const loader = new GLTFLoader();
    loader.load(
      '../assets/adam/adamHead.gltf', // Resource location (assets folder)
      function ( gltf ) {
        console.log(gltf);

        const object = gltf.scene;
        object.scale.set( 1, 1, 1 );
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
