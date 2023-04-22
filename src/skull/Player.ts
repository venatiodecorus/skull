import * as THREE from 'three'
import { Resource } from '../engine/Resources'
import { Engine } from '../engine/Engine'
import { GameEntity } from '../engine/GameEntity'
import { sRGBEncoding } from 'three'
import { keys } from '../engine/utilities/Keys'

export class Player extends THREE.Sprite implements GameEntity {
  resources: Resource[] = [
    {
      name: 'skull',
      path: 'skull.png',
      type: 'texture',
    },
  ]

  constructor(private engine: Engine) {
    super()

    const skullTexture = this.engine.resources.getItem('skull')
    skullTexture.encoding = sRGBEncoding
    this.material = new THREE.SpriteMaterial({
      map: skullTexture,
      color: 0xffffff,
    })

    // const sprite = new THREE.Sprite(material)
    // sprite.center.set(0, 1)
    // sprite.position.set(0, 0, -40)
    // sprite.scale.set(64, 64, 1.0)

    // this.material = material
  }

  update() {
    if (keys['w']) {
      this.position.y += 0.01
    }
    if (keys['a']) {
      this.position.x -= 0.01
    }
    if (keys['s']) {
      this.position.y -= 0.01
    }
    if (keys['d']) {
      this.position.x += 0.01
    }
  }
}
