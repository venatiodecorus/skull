import { Engine } from '../engine/Engine'
import * as THREE from 'three'
import { Experience } from '../engine/Experience'
import { Player } from './Player'
import { Resource } from '../engine/Resources'
import { keys } from '../engine/utilities/Keys'

export class Skull implements Experience {
  player!: Player

  resources: Resource[] = [
    {
      name: 'skull',
      path: 'skull.png',
      type: 'texture',
    },
  ]

  constructor(private engine: Engine) {}

  init() {
    this.engine.camera.instance.position.y = 0
    this.engine.camera.instance.position.z = 5
    this.player = new Player(this.engine)
    this.engine.scene.add(this.player)
  }

  resize() {}

  update() {
    this.player.update()
    window.onkeydown = window.onkeyup = this.inputHandler.bind(this)
  }

  inputHandler(e: KeyboardEvent) {
    e.preventDefault()
    keys[e.key] = e.type == 'keydown'
  }
}
