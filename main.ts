scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`级别1`)
let mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
mySprite.x += 8
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 3))
mySprite.x += 8
mySprite.y += -4
mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 1))
mySprite.x += 8
