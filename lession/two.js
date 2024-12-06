import * as THREE from "three"

const cubeTextureLoader = new THREE.CubeTextureLoader()
// 创建一个环境贴图，使用cubeTextureLoader加载6张相同的纹理图片
const envMap = cubeTextureLoader.load([
    "public/assets/texture.png", // 前
    "public/assets/texture.png", // 后
    "public/assets/texture.png", // 左
    "public/assets/texture.png", // 右
    "public/assets/texture.png", // 上
    "public/assets/texture.png", // 下
])

const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1,
    roughness: 0.2,
    envMap,
})

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const sphere = new THREE.Mesh(sphereGeometry, material)

// 创建一个物理材质，用于玻璃
const glassMaterial = new THREE.MeshPhysicalMaterial({
    // 设置颜色
    color: 0x88ccff,
    // 设置金属度
    metalness: 0,
    // 设置粗糙度
    roughness: 0,
    // 设置透明度
    transmission: 1,
    // 设置厚度
    thickness: 0.1,
    // 设置环境贴图
    envMap,
    // 设置折射率
    ior: 2
})

const glassSphere = new THREE.Mesh(sphereGeometry, glassMaterial)
glassSphere.position.set(2, 0, 0)

export const lessionTwoSetScene = (scene) => {
    scene.background = envMap
    scene.add(sphere)
    scene.add(glassSphere)
}

export const lessionTwoUpdate = () => {

}