sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
})
let projectile: Sprite = null
let ForestBat = sprites.create(assets.image`ForestBat1`, SpriteKind.Player)
scene.setBackgroundColor(7)
controller.moveSprite(ForestBat)
ForestBat.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`ForestMushroom`, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
