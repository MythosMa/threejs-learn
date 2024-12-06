import * as THREE from 'three'



const particleCount = 2000
const particleGeometry = new THREE.BufferGeometry()
const positionPosition = []
const sizes = []
const velocities = []

// 循环遍历粒子数量
for (let i = 0; i < particleCount; i++) {
    // 将随机生成的坐标值添加到positions数组中
    // positionPosition.push(Math.random() * 2 - 1)
    // positionPosition.push(Math.random() * 2 - 1)
    // positionPosition.push(Math.random() * 2 - 1)

    // // 烟雾：在一定范围内随机生成粒子的位置
    // const x = Math.random() * 100 - 50
    // const y = Math.random() * 50 - 25
    // const z = Math.random() * 100 - 50
    // positionPosition.push(x, y, z)

    // sizes.push(1 + Math.random() * 2)  // 粒子的随机大小

    // 烟花：随机生成粒子的位置和速度
    positionPosition.push(0, 0, 0)  // 初始位置为爆炸中心
    const speed = Math.random() * 5 + 2
    const direction = new THREE.Vector3(
        Math.random() * 2 - 1,  // 随机方向
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
    ).normalize().multiplyScalar(speed)

    velocities.push(direction.x, direction.y, direction.z)
}

particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positionPosition, 3))
// particleGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))
particleGeometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3))


// const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 })

// 烟雾材质
// 加载烟雾纹理
// const textureLoader = new THREE.TextureLoader()
// const particleTexture = textureLoader.load('public/assets/smoke-texture.webp')  // 自定义烟雾纹理

// const material = new THREE.PointsMaterial({
//     size: 5,
//     map: particleTexture,
//     blending: THREE.AdditiveBlending,
//     transparent: true,
//     opacity: 0.5,  // 半透明
//     depthWrite: false
// })

// 烟花材质
// 使用一个简单的圆形粒子纹理
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('path_to_particle_texture.png')

const material = new THREE.PointsMaterial({
    size: 0.5,
    map: particleTexture,
    blending: THREE.AdditiveBlending,
    transparent: true
})

const particles = new THREE.Points(particleGeometry, material)

export const lessionFiveSetScene = (scene, camera) => {
    camera.position.z = 30
    scene.add(particles)
}

export const lessionFiveUpdate = () => {
    // particles.rotation.x += 0.001
    // particles.rotation.y += 0.001

    // 烟花动效
    const positions = particleGeometry.attributes.position.array
    const velocities = particleGeometry.attributes.velocity.array

    // 更新粒子的位置
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3] * 0.1  // X轴
        positions[i * 3 + 1] += velocities[i * 3 + 1] * 0.1  // Y轴
        positions[i * 3 + 2] += velocities[i * 3 + 2] * 0.1  // Z轴
    }

    particleGeometry.attributes.position.needsUpdate = true
}