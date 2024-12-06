import * as THREE from 'three'

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const geometry = new THREE.BoxGeometry(1, 1, 1)
const cube = new THREE.Mesh(geometry, material)

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

let previousObject = null


export const lessionThreeSetScene = (scene, camera) => {
    window.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        raycaster.setFromCamera(mouse, camera)

        const intersects = raycaster.intersectObjects(scene.children)

        if (intersects.length > 0) {
            intersects[0].object.material.color.set(Math.random() * 0xffffff)
        }
    })

    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        raycaster.setFromCamera(mouse, camera)

        const intersects = raycaster.intersectObjects(scene.children)


        if (intersects.length > 0) {
            const object = intersects[0].object

            // 如果当前交互物体和之前的物体不同，恢复之前物体的颜色
            if (previousObject && previousObject !== object) {
                previousObject.material.color.set(0x00ff00)  // 恢复原始颜色
            }

            // 高亮当前物体（假设是发光效果）
            object.material.color.set(0xffffff)  // 发光（示例）

            // 更新已交互物体
            previousObject = object
        } else {
            // 如果射线未与物体相交，恢复所有物体颜色
            if (previousObject) {
                previousObject.material.color.set(0x00ff00)  // 恢复原始颜色
                previousObject = null
            }
        }
    })


    scene.add(cube)
}

export const lessionThreeUpdate = () => {
    if (!previousObject) {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
    }

} 