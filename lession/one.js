import * as THREE from "three"

// test draw cube
// const geometry = new THREE.BoxGeometry(2, 2, 2)
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

// camera.position.z = 5

// test draw line
// camera.position.set(0, 0, 100)
// camera.lookAt(0, 0, 0)
// const lineMaterial = new THREE.LineBasicMaterial({ color: "#ff0000" })
// const points = []
// points.push(new THREE.Vector3(- 10, 0, 0))
// points.push(new THREE.Vector3(0, 10, 0))
// points.push(new THREE.Vector3(10, 0, 0))

// const geometry = new THREE.BufferGeometry().setFromPoints(points)
// const line = new THREE.Line(geometry, lineMaterial)
// scene.add(line)

// 创建一个响应光照材质的立方体
const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
// const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.5, metalness: 0.2 })
const cube = new THREE.Mesh(geometry, material)

const sphereGeometry = new THREE.SphereGeometry()
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.set(0, 2, 0)


// 添加环境光
const ambientLight = new THREE.AmbientLight(0x404040, 2)


// 添加点光源
const pointLight = new THREE.PointLight(0x0000ff, 20, 500)
pointLight.castShadow = true  // 启用点光源的阴影
pointLight.position.set(3, 3, 3)


const directionLight = new THREE.DirectionalLight(0xffffff, 5)
directionLight.castShadow = true  // 启用方向光的阴影
directionLight.position.set(-100, 0, 100)


// 添加一个平面来接收阴影
const planeGeometry = new THREE.PlaneGeometry(10, 10)
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true  // 允许平面接收阴影
plane.rotation.x = -Math.PI / 2  // 使平面水平
plane.position.y = -1

cube.castShadow = true
cube.receiveShadow = true

sphere.castShadow = true
sphere.receiveShadow = true

export const lessionOneSetScene = (scene) => {
    scene.add(cube)
    scene.add(sphere)
    scene.add(ambientLight)
    scene.add(pointLight)
    scene.add(directionLight)
    scene.add(plane)
}

export const lessionOneUpdate = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
}