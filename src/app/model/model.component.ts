import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats-js';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})

export class ModelComponent {

  contentHeight: number;
  domElement: HTMLElement;
  rendererContainer: HTMLElement;
  onWindowResize: any;

  drop(event: CdkDragDrop<string[]>) {
    console.log("liikumine toimus");
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  /*
  ngOnInit() {
    this.createScene();
  }

  createScene() {

    const scene = new THREE.Scene();
    var containerWIdth = document.getElementById('rendererGrid').offsetWidth;
    const camera = new THREE.PerspectiveCamera( 25, containerWIdth / window.innerHeight, 1, 20000 );
    camera.position.set( 1, 1, 20 );
    camera.lookAt( scene.position );

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor( 0xC5C5C3 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.gammaOutput = true;
    renderer.setSize(containerWIdth, window.innerHeight);

    this.rendererContainer = document.getElementById( 'rendererContainer' );
    this.domElement = renderer.domElement;
    this.rendererContainer.appendChild(this.domElement);


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

    window.addEventListener( 'resize', this.onWindowResize, false );

    this.onWindowResize = function h() {
        console.log("nüüd");
        containerWIdth = document.getElementById('rendererGrid').offsetWidth;
        camera.aspect = containerWIdth / window.innerHeight;
        // adjust the FOV
        camera.fov = ( 360 / Math.PI ) * Math.atan( ( window.innerHeight / window.innerHeight ) );
        camera.updateProjectionMatrix();
        camera.lookAt( scene.position );
        renderer.setSize( containerWIdth , window.innerHeight );
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
    if (this.rendererContainer.contains(this.domElement)) {
      this.rendererContainer.removeChild(this.domElement);
    }
  }
  */

}
