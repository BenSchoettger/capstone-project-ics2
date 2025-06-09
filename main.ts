controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inBattle == 1) {
        if (mySprite.vy == 0) {
        	mySprite.vy = -180
        }
    }
})
function heroJump () {
	
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    heroHealth.value += heroHealth.value / 5
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    playerHealth.value += heroHealth.value / 5
    sprites.destroy(otherSprite)
})
function loadLevel () {
    mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
    scene.setBackgroundImage(assets.image`background1`)
    mySprite.setPosition(115, 80)
    mySprite.ay = 800
    tiles.setCurrentTilemap(tilemap`level1`)
    timer.after(3000, function () {
        heroSprite = sprites.create(assets.image`hero`, SpriteKind.Enemy)
        heroSprite.setPosition(-10, 80)
        heroSprite.setVelocity(40, 0)
        timer.after(1500, function () {
            heroSprite.setVelocity(0, 0)
            heroSprite.sayText(heroSays[randint(0, 4)], 2000)
            timer.after(2000, function () {
                mySprite.sayText(playerReply[randint(0, 4)], 1000)
                timer.after(2000, function () {
                    startFight()
                })
            })
        })
    })
}
function startFight () {
    mySprite.setPosition(140, 80)
    heroSprite.setPosition(10, 80)
    playerHealth = statusbars.create(20, 4, StatusBarKind.Health)
    playerHealth.attachToSprite(mySprite)
    playerHealth.value = 100
    playerHealth.setColor(10, 12)
    heroHealth = statusbars.create(20, 4, StatusBarKind.Health)
    heroHealth.attachToSprite(heroSprite)
    heroHealth.value = heroHealth.value
    inBattle = 1
    controller.moveSprite(mySprite, 50, 0)
}
let extraLife: Sprite = null
let playerHealth: StatusBarSprite = null
let heroHealth: StatusBarSprite = null
let mySprite: Sprite = null
let inBattle = 0
let heroSays: string[] = []
let playerReply: string[] = []
let heroSprite: Sprite = null
heroSprite = null
let heroHealth2 = 5
playerReply = [
"Good luck.",
"We'll see about that.",
"I'm not going down easy.",
"You are nothing.",
"You're in for it now."
]
heroSays = [
"I have come to defeat you.",
"You are going down.",
"I'll beat you this time.",
"Your reign has come to an end.",
"You shall perish in this battle."
]
let heroDamage = 1
game.splash("Press B to use your special ability. A to attack. You are the boss. (the knight)")
loadLevel()
game.onUpdateInterval(10000, function () {
    if (inBattle == 1) {
        extraLife = sprites.create(assets.image`life`, SpriteKind.Food)
        extraLife.setPosition(randint(10, 150), 50)
    }
})
