function loadLevel () {
    mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    scene.setBackgroundImage(assets.image`background1`)
    tiles.setCurrentTilemap(tilemap`level1`)
}
let mySprite: Sprite = null
loadLevel()