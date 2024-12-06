import * as THREE from 'three'

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const geometry = new THREE.BoxGeometry(1, 1, 1)
const cube = new THREE.Mesh(geometry, material)

let velocityY = 0
let gravity = -0.01
let groundLevel = -3
let elasticity = 0.7

export const lessionFourSetScene = (scene, camera) => {
    scene.add(cube)
}

export const lessionFourUpdate = (scene, camera) => {
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    // cube.position.x += 0.01

    velocityY += gravity
    cube.position.y += velocityY

    if (cube.position.y <= groundLevel) {
        cube.position.y = groundLevel
        velocityY *= -elasticity
    }

}