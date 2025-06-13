controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inBattle == 1) {
        if (mySprite.vy == 0) {
            mySprite.vy = -180
        }
    }
})
function heroJump () {
    if (inBattle == 1) {
        if (heroSprite.vy == 0) {
            heroSprite.vy = -220
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (heroSprite.x > mySprite.x - 20 && heroSprite.x < mySprite.x + 20) {
        if (inBattle == 1) {
            heroHealth.value -= 20
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    heroHealth.value += heroHealth.value / 5
    extraLife.x = -1000
    sprites.destroy(otherSprite)
})
function loadLevel () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
    characterAnimations.loopFrames(
    mySprite,
    [img`
        ..............fff...............
        .............f222f..............
        ............f22222f.............
        ............fffffff.............
        ...........fdddddddf............
        ..........fdddddddddf...........
        .........fddffdddddddf..........
        .........fdfddfddddddf..........
        .........ffdfddfdddddf..........
        .........fdfdddfdddddf..........
        .........fdfdddfffffff..........
        .........ffddfdddddddf..........
        .........fddfddddddddf..........
        ..........fdfdfdddddf...........
        ...........fdddddddf............
        ............fffffff.............
        ...........ffdddddff............
        ......ffffffdddddddf............
        ......fddddfdfffffdf............
        .....fffffffdf525fdf............
        .....f1f...fdf525fdf............
        .....f1f...fdfffffdf............
        .....f1f...fdddddddf............
        .....f1f...fdddddddf............
        .....f1f...fdddddddf............
        .....f1f...fdddddddf............
        .....f1f...fffffffff............
        .....f1f......fff...............
        .....f1f....ffdddf..............
        .....f1f...fdddddf..............
        .....f1f...fdddddf..............
        .....fff....fffff...............
        `,img`
        ................................
        ................................
        ..............fff...............
        .............f222f..............
        ............f22222f.............
        ............fffffff.............
        ...........fdddddddf............
        ..........fdddddddddf...........
        .........fddffdddddddf..........
        .........fdfddfddddddf..........
        .........ffdfddfdddddf..........
        .........fdfdddfdddddf..........
        .........fdfdddfffffff..........
        .........ffddfdddddddf..........
        .........fddfddddddddf..........
        ..........fdfdfdddddf...........
        ...........fdddddddf............
        ............fffffff.............
        ...........ffdddddff............
        ......ffffffdddddddf............
        ......fddddfdfffffdf............
        .....fffffffdf525fdf............
        .....f1f...fdf525fdf............
        .....f1f...fdfffffdf............
        .....f1f...fdddddddf............
        .....f1f...fdddddddf............
        .....f1f...fdddddddf............
        .....f1f...fdddddddf............
        .....f1f.fffffffffffff..........
        .....f1ffdddddf.fdddddf.........
        .....f1ffdddddf.fdddddf.........
        .....fff.fffff...fffff..........
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        ...............fff..............
        ..............f222f.............
        .............f22222f............
        .............fffffff............
        ............fdddddddf...........
        ...........fdddddddddf..........
        ..........fdddddddffddf.........
        ..........fddddddfddfdf.........
        ..........fdddddfddfdff.........
        ..........fdddddfdddfdf.........
        ..........fffffffdddfdf.........
        ..........fdddddddfddff.........
        ..........fddddddddfddf.........
        ...........fdddddfdfdf..........
        ............fdddddddf...........
        .............fffffff............
        ............ffdddddff...........
        ............fdddddddffffff......
        ............fdfffffdfddddf......
        ............fdf525fdfffffff.....
        ............fdf525fdf...f1f.....
        ............fdfffffdf...f1f.....
        ............fdddddddf...f1f.....
        ............fdddddddf...f1f.....
        ............fdddddddf...f1f.....
        ............fdddddddf...f1f.....
        ............fffffffff...f1f.....
        ...............fff......f1f.....
        ..............fdddff....f1f.....
        ..............fdddddf...f1f.....
        ..............fdddddf...f1f.....
        ...............fffff....fff.....
        `,img`
        ................................
        ................................
        ...............fff..............
        ..............f222f.............
        .............f22222f............
        .............fffffff............
        ............fdddddddf...........
        ...........fdddddddddf..........
        ..........fdddddddffddf.........
        ..........fddddddfddfdf.........
        ..........fdddddfddfdff.........
        ..........fdddddfdddfdf.........
        ..........fffffffdddfdf.........
        ..........fdddddddfddff.........
        ..........fddddddddfddf.........
        ...........fdddddfdfdf..........
        ............fdddddddf...........
        .............fffffff............
        ............ffdddddff...........
        ............fdddddddffffff......
        ............fdfffffdfddddf......
        ............fdf525fdfffffff.....
        ............fdf525fdf...f1f.....
        ............fdfffffdf...f1f.....
        ............fdddddddf...f1f.....
        ............fdddddddf...f1f.....
        ............fdddddddf...f1f.....
        ............fdddddddf...f1f.....
        ..........fffffffffffff.f1f.....
        .........fdddddf.fdddddff1f.....
        .........fdddddf.fdddddff1f.....
        ..........fffff...fffff.fff.....
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        ...............f................
        ..............f2f...............
        ..............f2f...............
        .............fffff..............
        ...........ffdddddff............
        ..........fdddddddddf...........
        .........fdddddfdddddf..........
        .........fddddfdfddddf..........
        ........fdddffdddffdddf.........
        ........fdffdddddddffdf.........
        ........ffdddddfdddddff.........
        ........fddddfdfdfddddf.........
        ........fddfdfdfdfdfddf.........
        ........fddfdfdfdfdfddf.........
        .........fdddddddddddf..........
        ..........fffffffffff...........
        ............fdddddf.............
        .........fffffffffffff..........
        .......fffdddddddddddfff........
        ......fddfdddddddddddfddf.......
        .....fdddfdddfffffdddfdddf......
        .....fddfffddf525fddfffddf......
        .....fddf.fddf525fddf.fddf......
        .....ffff.fddfffffddf.ffff......
        ..........fdddddddddf..ff.......
        ..........fdddddddddf.f11f......
        ..........fdddfffdddf.f11f......
        ...........fff...fff..f11f......
        .........ffdddf.fdddfff11f......
        ........fdddddf.fdddddf11f......
        ........fdddddf.fdddddf11f......
        .........fffff...fffff.ff.......
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    scene.setBackgroundImage(assets.image`background1`)
    mySprite.setPosition(115, 80)
    mySprite.ay = 800
    tiles.setCurrentTilemap(tilemap`level1`)
    timer.after(3000, function () {
        heroSprite = sprites.create(assets.image`hero`, SpriteKind.Enemy)
        characterAnimations.loopFrames(
        heroSprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f d d f f f . . . . 
            . . . f f f d d d d f f f . . . 
            . . f f f d d d d d d f f f . . 
            . . f f d d d d d d d d d f . . 
            . . f d d f f f f f f d d f . . 
            . . f f f f d d d d f f f f . . 
            . f f d f d f 1 1 f d f d f f . 
            . f d d 1 1 f 1 1 f 1 1 d d f . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . . f d 1 1 1 1 1 1 d f . . . 
            . . d d f d d d d d d f d d . . 
            . . d 1 f d d d d d d f 1 d . . 
            . . d d f d d d d d d f d d . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        heroSprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f d d d d f d f . . . 
            . . . f f d d d d f d d d f . . 
            . . . f d d d f f d d d d f . . 
            . . . f f f f d d d d d d d f . 
            . . . f d d d d f f f f d d f . 
            . . f f f f f f f d d d f f f . 
            . . f f d d d d b f 1 1 d d f . 
            . . f d d d d d 1 f 1 1 d f . . 
            . . . f d d d d 1 1 1 1 f . . . 
            . . . . f f d d d d d d f . . . 
            . . . . . f d d d d d d f . . . 
            . . . . . f d d d d d d f . . . 
            . . . . . f d d f d d d f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f d d d d f d f . . . 
            . . . f f d d d d f d d d f . . 
            . . . f d d d f f d d d d f . . 
            . . . f f f f d d d d d d d f . 
            . . . f d d d d f f f f d d f . 
            . . f f f f f f f d d d f f f . 
            . . f f d d d d b f 1 1 d d f . 
            . . f d d d d d 1 f 1 1 d f . . 
            . . . f f d d d 1 1 1 1 f . . . 
            . . . . . f d d d d d d f . . . 
            . . . . . f d d d d d d f . . . 
            . . . . f f f d d f d d f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f d d d d f d f . . . 
            . . . f f d d d d f d d d f . . 
            . . . f d d d f f d d d d f . . 
            . . . f f f f d d d d d d d f . 
            . . . f d d d d f f f f d d f . 
            . . f f f f f f f d d d f f f . 
            . . f f d d d d 1 f 1 1 d d f . 
            . . f d d d d d 1 f 1 1 d f . . 
            . . . f d d d d 1 1 1 1 f . . . 
            . . . . f f d d d d d d f . . . 
            . . . . . f d d d d d d f . . . 
            . . . . . f d d d d d d f . . . 
            . . . . . f d d f d d d f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f d d d d f d f . . . 
            . . . f f d d d d f d d d f . . 
            . . . f d d d f f d d d d f . . 
            . . . f f f f d d d d d d d f . 
            . . . f d d d d f f f f d d f . 
            . . f f f f f f f d d d f f f . 
            . . f f d d d d 1 f 1 1 d d f . 
            . . f d d d d d 1 f 1 1 d f . . 
            . . . f d d d d 1 1 1 1 f . . . 
            . . . . f d d d d d d d f . . . 
            . . . . f d d d d d d d f . . . 
            . . . . f d d f d d d d f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        heroSprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f d f d d d d f f . . . . 
            . . f d d d f d d d d f f . . . 
            . . f d d d d f f d d d f . . . 
            . f d d d d d d d f f f f . . . 
            . f d d f f f f d d d d f . . . 
            . f f f d d d f f f f f f f . . 
            . f d d 1 1 f b d d d d f f . . 
            . . f d 1 1 f 1 d d d d d f . . 
            . . . f 1 1 1 1 d d d d f . . . 
            . . . f d d d d d d f f . . . . 
            . . . f d d d d d d f . . . . . 
            . . . f d d d d d d f . . . . . 
            . . . f d d d f d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f d f d d d d f f . . . . 
            . . f d d d f d d d d f f . . . 
            . . f d d d d f f d d d f . . . 
            . f d d d d d d d f f f f . . . 
            . f d d f f f f d d d d f . . . 
            . f f f d d d f f f f f f f . . 
            . f d d 1 1 f b d d d d f f . . 
            . . f d 1 1 f 1 d d d d d f . . 
            . . . f 1 1 1 1 d d d f f . . . 
            . . . f d d d d d d f . . . . . 
            . . . f d d d d d d f . . . . . 
            . . f f d d f d d f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f d f d d d d f f . . . . 
            . . f d d d f d d d d f f . . . 
            . . f d d d d f f d d d f . . . 
            . f d d d d d d d f f f f . . . 
            . f d d f f f f d d d d f . . . 
            . f f f d d d f f f f f f f . . 
            . f d d 1 1 f 1 d d d d f f . . 
            . . f d 1 1 f 1 d d d d d f . . 
            . . . f 1 1 1 1 d d d d f . . . 
            . . . f d d d d d d f f . . . . 
            . . . f d d d d d d f . . . . . 
            . . . f d d d d d d f . . . . . 
            . . . f d d d f d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f d f d d d d f f . . . . 
            . . f d d d f d d d d f f . . . 
            . . f d d d d f f d d d f . . . 
            . f d d d d d d d f f f f . . . 
            . f d d f f f f d d d d f . . . 
            . f f f d d d f f f f f f f . . 
            . f d d 1 1 f 1 d d d d f f . . 
            . . f d 1 1 f 1 d d d d d f . . 
            . . . f 1 1 1 1 d d d d f . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . f f d d d d f d d f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
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
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    loadLevel()
    heroDamage += 1
    heroHP += 5
    info.changeScoreBy(1)
    inBattle = 0
})
function startFight () {
    mySprite.setPosition(140, 80)
    heroSprite.setPosition(10, 80)
    heroSprite.ay = 800
    playerHealth = statusbars.create(20, 4, StatusBarKind.Health)
    playerHealth.attachToSprite(mySprite)
    playerHealth.value = 100
    playerHealth.setColor(10, 12)
    heroHealth = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    heroHealth.attachToSprite(heroSprite)
    heroHealth.value = heroHP
    heroHealth.max = heroHP
    inBattle = 1
    controller.moveSprite(mySprite, 50, 0)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    playerHealth.value += heroHealth.value / 5
    extraLife.x = -1000
    sprites.destroy(otherSprite)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
	
})
let ghostAttack = 0
let lifeSpawned = 0
let heroAttack = 0
let extraLife: Sprite = null
let mySprite: Sprite = null
let heroSays: string[] = []
let playerReply: string[] = []
let heroHP = 0
let playerHealth: StatusBarSprite = null
let heroHealth: StatusBarSprite = null
let heroSprite: Sprite = null
let inBattle = 0
let ghost = sprites.create(assets.image`ghost`, SpriteKind.Projectile)
ghost.setPosition(1000, 1000)
heroSprite = null
heroHP = 5
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
game.onUpdate(function () {
    if (inBattle == 1) {
        if (heroSprite.x > mySprite.x - 20 && heroSprite.x < mySprite.x + 20) {
            if (heroAttack == 1) {
                playerHealth.value -= heroDamage
heroAttack = 0
                characterAnimations.runFrames(
                heroSprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f d d d d f d f . . . . 
                    . . f f d d d d f d d d f . . . 
                    . . f d d d f f d d d d f . . . 
                    . . f f f f d d d d d d d f . . 
                    . . f d d d d f f f f d d f . . 
                    . f f f f f f f d d d f f f . . 
                    . f f d d d d b f 1 1 d d f . . 
                    . f d d d d d 1 f 1 1 d f . . . 
                    . . f f d d d 1 1 1 1 f . . . . 
                    . . . . f d d 1 1 1 1 f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . f f f d d f d d f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f d d d d f d f . . . . 
                    . . f f d d d d f d d d f . . . 
                    . . f d d d f f d d d d f . . . 
                    . . f f f f d d d d d d d f . . 
                    . . f d d d d f f f f d d f . . 
                    . f f f f f f f d d d f f f . . 
                    . f f d d d d d f 1 1 d d f . . 
                    . f d d d d d 1 f 1 1 d f f . . 
                    . . f d d d d 1 1 1 1 f d d f . 
                    . . . f f d d d d d d f d 1 f . 
                    . . . . f d d d d d f d d d f . 
                    . . . . f d d d d d f d d f . . 
                    . . . . f d d d f d f f f . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f d d d d f d f . . . . 
                    . . f f d d d d f d d d f . . . 
                    . . f d d d f f d d d d f . . . 
                    . . f f f f d d d d d d d f . . 
                    . . f d d d d f f f f d d f . . 
                    . f f f f f f f d d d f f f . . 
                    . f f d d d d b f 1 1 d d f . . 
                    . f d d d d d 1 f 1 1 d f . . . 
                    . . f f d d d 1 1 1 1 f . . . . 
                    . . . . f d d 1 1 1 1 f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . f f f d d f d d f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . f f d d d d f d f . . . . 
                    . . f f d d d d f d d d f . . . 
                    . . f d d d f f d d d d f . . . 
                    . . f f f f d d d d d d d f . . 
                    . . f d d d d f f f f d d f . . 
                    . f f f f f f f d d d f f f . . 
                    . f f d d d d d f 1 1 1 d f . . 
                    . f d d d d d d f 1 1 1 f f . . 
                    . . f f d d d d 1 1 1 f d d f . 
                    . . . . f d d d 1 1 1 f d 1 f . 
                    . . . . f d d d d d f d d d f . 
                    . . . f f d d d d d f d d f . . 
                    . . . f f f f f f d f f f . . . 
                    . . . . f f . . . f f f . . . . 
                    `],
                200,
                characterAnimations.rule(Predicate.FacingLeft)
                )
                characterAnimations.runFrames(
                heroSprite,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f d f d d d d f f . . . 
                    . . . f d d d f d d d d f f . . 
                    . . . f d d d d f f d d d f . . 
                    . . f d d d d d d d f f f f . . 
                    . . f d d f f f f d d d d f . . 
                    . . f f f d d d f f f f f f f . 
                    . . f d d 1 1 f b d d d d f f . 
                    . . . f d 1 1 f 1 d d d d d f . 
                    . . . . f 1 1 1 1 d d d f f . . 
                    . . . . f 1 1 1 1 d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . f f d d f d d f f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f d f d d d d f f . . . 
                    . . . f d d d f d d d d f f . . 
                    . . . f d d d d f f d d d f . . 
                    . . f d d d d d d d f f f f . . 
                    . . f d d f f f f d d d d f . . 
                    . . f f f d d d f f f f f f f . 
                    . . f d d 1 1 f d d d d d f f . 
                    . . f f d 1 1 f 1 d d d d d f . 
                    . f d d f 1 1 1 1 d d d d f . . 
                    . f 1 d f d d d d d d f f . . . 
                    . f d d d f d d d d d f . . . . 
                    . . f d d f d d d d d f . . . . 
                    . . . f f f d f d d d f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f d f d d d d f f . . . 
                    . . . f d d d f d d d d f f . . 
                    . . . f d d d d f f d d d f . . 
                    . . f d d d d d d d f f f f . . 
                    . . f d d f f f f d d d d f . . 
                    . . f f f d d d f f f f f f f . 
                    . . f d d 1 1 f b d d d d f f . 
                    . . . f d 1 1 f 1 d d d d d f . 
                    . . . . f 1 1 1 1 d d d f f . . 
                    . . . . f 1 1 1 1 d d f . . . . 
                    . . . . f d d d d d d f . . . . 
                    . . . f f d d f d d f f f . . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f d f d d d d f f . . . 
                    . . . f d d d f d d d d f f . . 
                    . . . f d d d d f f d d d f . . 
                    . . f d d d d d d d f f f f . . 
                    . . f d d f f f f d d d d f . . 
                    . . f f f d d d f f f f f f f . 
                    . . f d 1 1 1 f d d d d d f f . 
                    . . f f 1 1 1 f d d d d d d f . 
                    . f d d f 1 1 1 d d d d f f . . 
                    . f 1 d f 1 1 1 d d d f . . . . 
                    . f d d d f d d d d d f . . . . 
                    . . f d d f d d d d d f f . . . 
                    . . . f f f d f f f f f f . . . 
                    . . . . f f f . . . f f . . . . 
                    `],
                200,
                characterAnimations.rule(Predicate.FacingRight)
                )
            }
        }
    }
})
game.onUpdate(function () {
    if (lifeSpawned == 1) {
        if (heroSprite.x > extraLife.x - 5 && heroSprite.x < extraLife.x + 5) {
            heroJump()
        }
    }
})
game.onUpdateInterval(randint(500, 2000), function () {
    if (inBattle == 1) {
        heroSprite.setVelocity(randint(50, -50), 0)
    }
})
game.onUpdateInterval(500, function () {
    heroAttack = 1
    ghostAttack = 1
})
game.onUpdateInterval(10000, function () {
    if (inBattle == 1) {
        extraLife = sprites.create(assets.image`life`, SpriteKind.Food)
        extraLife.setPosition(randint(10, 150), 50)
        lifeSpawned = 1
    }
})
