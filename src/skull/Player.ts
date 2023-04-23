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
  }

  update() {
    this.handleInput()
  }

  handleInput() {
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
