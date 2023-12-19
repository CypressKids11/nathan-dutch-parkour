import * as THREE from "three";
import { Color } from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

const objects = [];
let raycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;
let cube24;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

let camera, scene, controls, renderer;

init();
animate();
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.y = 10;
  controls = new PointerLockControls(camera, document.body);
  const blocker = document.getElementById("blocker");
  const instructions = document.getElementById("instructions");

  instructions.addEventListener("click", function () {
    controls.lock();
  });
  controls.addEventListener("lock", function () {
    instructions.style.display = "none";
    blocker.style.display = "none";
  });
  controls.addEventListener("unlock", function () {
    blocker.style.display = "block";
    instructions.style.display = "";
  });
  scene.add(controls.getObject());

  const onKeyDown = function (event) {
    switch (event.code) {
      case "KeyW":
        moveForward = true;
        break;
      case "KeyS":
        moveBackward = true;
        break;
      case "KeyA":
        moveLeft = true;
        break;
      case "KeyD":
        moveRight = true;
        break;
      case "Space":
        if (canJump === true) velocity.y += 100;
        canJump = false;
        break;
    }
  };

  const onKeyUp = function (event) {
    switch (event.code) {
      case "KeyW":
        moveForward = false;
        break;
      case "KeyS":
        moveBackward = false;
        break;
      case "KeyA":
        moveLeft = false;
        break;
      case "KeyD":
        moveRight = false;
        break;
    }
  };
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  raycaster = new THREE.Raycaster(new THREE.Vector3(),new THREE.Vector3(0, -1,0),0,10);

  const geometry = new THREE.CylinderGeometry(100, 100, 1000, 64, 64);
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

  

  const geometry1 = new THREE.BoxGeometry(50, 10, 50);
  const material1 = new THREE.MeshLambertMaterial({ color: 0x49f74e }); //green
  const cube1 = new THREE.Mesh(geometry1, material1);
  scene.add(cube1);
  objects.push(cube1)


  const geometry2 = new THREE.BoxGeometry(10, 10, 10);
  const material2 = new THREE.MeshLambertMaterial({ color: 0xff0000 }); //red
  
  const geometry3 = new THREE.BoxGeometry(150, 10, 60);
  const material3 = new THREE.MeshLambertMaterial({ color: 0xffa500 }); //orange
  const material4 = new THREE.MeshLambertMaterial({ color: 0xffff00 }); //yellow
  const material5 = new THREE.MeshLambertMaterial({ color: 0x22d933 }); //green
  const material6 = new THREE.MeshLambertMaterial({ color: 0x1ac5ff }); //blue
  const material7 = new THREE.MeshLambertMaterial({ color: 0x8a2be2 }); //purple
  const material8 = new THREE.MeshLambertMaterial({ color: 0xcd2990 }); //pink

  const cylinder = new THREE.Mesh(geometry, material2);
  cylinder.position.set(0, -500, 0);
  scene.add(cylinder);
  objects.push(cylinder)

  const cube2 = new THREE.Mesh(geometry2, material3);
  cube2.position.set(50, 0, 0);
  scene.add(cube2);
  objects.push(cube2)

  const cube3 = new THREE.Mesh(geometry2, material4);
  cube3.position.set(50, 25, 25);
  scene.add(cube3);
  objects.push(cube3)

  const cube4 = new THREE.Mesh(geometry2, material5);
  cube4.position.set(50, 50, 50);
  scene.add(cube4);
  objects.push(cube4)

  const cube5 = new THREE.Mesh(geometry2, material6);
  cube5.position.set(25, 75, 50);
  scene.add(cube5);
  objects.push(cube5)

  const cube6 = new THREE.Mesh(geometry2, material7);
  cube6.position.set(0, 100, 50);
  scene.add(cube6);
  objects.push(cube6)

  const cube7 = new THREE.Mesh(geometry2, material8);
  cube7.position.set(-25, 125, 50);
  scene.add(cube7);
  objects.push(cube7)

  const cube8 = new THREE.Mesh(geometry2, material2);
  cube8.position.set(-50, 150, 50);
  scene.add(cube8);
  objects.push(cube8)

  const cube9 = new THREE.Mesh(geometry2, material3);
  cube9.position.set(-50, 175, 25);
  scene.add(cube9);
  objects.push(cube9)

  const cube10 = new THREE.Mesh(geometry2, material4);
  cube10.position.set(-50, 200, 0);
  scene.add(cube10)
  objects.push(cube10);

  const cube11 = new THREE.Mesh(geometry2, material5);
  cube11.position.set(-50, 225, -25);
  scene.add(cube11)
  objects.push(cube11);

  const cube12 = new THREE.Mesh(geometry2, material6);
  cube12.position.set(-50, 250, -50);
  scene.add(cube12)
  objects.push(cube12);

  const cube13 = new THREE.Mesh(geometry2, material7);
  cube13.position.set(-25, 275, -50);
  scene.add(cube13)
  objects.push(cube13);

  const cube14 = new THREE.Mesh(geometry2, material8);
  cube14.position.set(0, 300, -50);
  scene.add(cube14)
  objects.push(cube14);

  const cube15 = new THREE.Mesh(geometry2, material2);
  cube15.position.set(25, 325, -50);
  scene.add(cube15)
  objects.push(cube15);

  const cube16 = new THREE.Mesh(geometry2, material3);
  cube16.position.set(50, 350, -50);
  scene.add(cube16)
  objects.push(cube16);

  const cube17 = new THREE.Mesh(geometry2, material4);
  cube17.position.set(50, 375, -25);
  scene.add(cube17)
  objects.push(cube17);

  const cube18 = new THREE.Mesh(geometry2, material5);
  cube18.position.set(50, 400, 0);
  scene.add(cube18)
  objects.push(cube18);

  const cube19 = new THREE.Mesh(geometry2, material6);
  cube19.position.set(50, 425, 25);
  scene.add(cube19)
  objects.push(cube9);

  const cube20 = new THREE.Mesh(geometry2, material7);
  cube20.position.set(50, 450, 50);
  scene.add(cube20)
  objects.push(cube20);

  

  const cube21 = new THREE.Mesh(geometry3, material8);
  cube21.position.set(150, 450, 50);
  scene.add(cube21)
  objects.push(cube21);

  const cube22 = new THREE.Mesh(geometry1, material1);
  cube22.position.set(150, 455, 50);
  scene.add(cube22)
  objects.push(cube22);

  const cylinder2 = new THREE.Mesh(geometry, material3);
  cylinder2.position.set(200, -50, 250);
  scene.add(cylinder2);
  objects.push(cylinder2)

  const cube23 = new THREE.Mesh(geometry2, material2);
  cube23.position.set(200, 455, 120);
  scene.add(cube23)
  objects.push(cube23);

  const geometry4 = new THREE.BoxGeometry(250, 10, 60);

  cube24 = new THREE.Mesh(geometry4, material4);
  cube24.position.set(200, 455, 515);
  scene.add(cube24)
  objects.push(cube24);

  const cube25 = new THREE.Mesh(geometry1, material1);
  cube25.position.set(400, 455, 515);
  scene.add(cube25)
  objects.push(cube25);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener('resize',onWindowResize);
}

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}



function animate() {
  requestAnimationFrame(animate);
  cube24.rotation.y += 0.01;
  const time = performance.now();
  if(controls.isLocked === true){
        raycaster.ray.origin.copy(controls.getObject().position);
        raycaster.ray.origin.y -= 10;

        const intersections = raycaster.intersectObjects(objects,false);
        const onObjects = intersections.length > 0;
        const delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 10.0 * delta;

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);   
        direction.normalize();

        if(moveForward||moveBackward) velocity.z -= direction.z * 800.0 * delta;
        if(moveLeft||moveRight) velocity.x -= direction.x * 800.0 * delta;
        if(onObjects === true){
            velocity.y = Math.max(0,velocity.y);
            canJump = true;
        }
        controls.moveRight(-velocity.x * delta);
        controls.moveForward(-velocity.z * delta);
        controls.getObject().position.y += (velocity.y * delta);
        if(controls.getObject().position.y < 10) {

            velocity.y = 0;
            controls.getObject().position.y = 10;

            canJump = true;
        }
    }
    prevTime = time;
    renderer.render(scene, camera);
}
