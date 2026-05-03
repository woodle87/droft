
import Preload from 'https://cdn.jsdelivr.net/gh/woodle87/droft@main/scenes/Preload.js'
import Game from 'https://cdn.jsdelivr.net/gh/woodle87/droft@main/scenes/Game.js'
import DebugHUD from 'https://cdn.jsdelivr.net/gh/woodle87/droft@main/scenes/DebugHUD.js'

const config = {
  type            : Phaser.AUTO,
  parent          : 'phaser-app',
  title           : 'SAD Racer',
  url             : 'http://coestar.live',
  width           : 1920,
  height          : 1080,
  scale           : {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene           : [ Preload, Game, DebugHUD ],
  pixelArt        : true,
  backgroundColor : 0x000000,
  dom             : {
    createContainer: true
  }
}

const game = new Phaser.Game(config)
