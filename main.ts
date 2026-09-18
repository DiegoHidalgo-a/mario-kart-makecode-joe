namespace SpriteKind {
    export const ui = SpriteKind.create()
    export const itembox = SpriteKind.create()
}
function make_Item_Box_at_x_y (x: number, y: number) {
    item_box = sprites.create(assets.image`itembox`, SpriteKind.itembox)
    tiles.placeOnTile(item_box, tiles.getTileLocation(x, y))
    animation.runImageAnimation(
    item_box,
    assets.animation`item box`,
    100,
    true
    )
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (item == 2) {
        sprites.destroy(item_spinner)
        music.play(music.createSoundEffect(WaveShape.Noise, 1102, 2163, 255, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        Mario.startEffect(effects.blizzard, 500)
        for (let index = 0; index < 100; index++) {
            speed = 2
            pause(1)
        }
        item = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.itembox, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.createSoundEffect(WaveShape.Triangle, 2452, 3910, 43, 0, 400, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    if (item == 0) {
        item_spinner = sprites.create(assets.image`itembox_mushroom`, SpriteKind.ui)
        item_spinner.setPosition(Mario.x, Mario.y)
        item_spinner.setScale(2, ScaleAnchor.Middle)
        item_spinner.setStayInScreen(true)
        item = 1
        animation.runImageAnimation(
        item_spinner,
        assets.animation`itemreelspin`,
        100,
        true
        )
        music.play(music.createSong(assets.song`item spin`), music.PlaybackMode.UntilDone)
        RandomInt = randint(2, 2)
        if (RandomInt == 2) {
            item_spinner.setImage(assets.image`itembox_mushroom`)
            item = RandomInt
        } else if (RandomInt == 3) {
            item_spinner.setImage(assets.image`itembox_greenshell`)
            item = RandomInt
        } else if (RandomInt == 4) {
            item_spinner.setImage(assets.image`itembox_redshell`)
            item = RandomInt
        } else {
            item_spinner.setImage(assets.image`itembox_banana`)
            item = RandomInt
        }
        animation.stopAnimation(animation.AnimationTypes.All, item_spinner)
    }
    pause(5000)
    pause(5000)
    make_Item_Box_at_x_y(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`block red`, function (sprite, location) {
    speed = speed * -1
})
let zposamounttochange = 0
let Kart_Z_pos = 0
let in_control = 0
let lap_counter: Sprite = null
let Lap = 0
let LastCheckpoint = 0
let Direction = 0
let RandomInt = 0
let speed = 0
let item_spinner: Sprite = null
let item = 0
let item_box: Sprite = null
let Mario: Sprite = null
Mario = sprites.create(assets.image`Mario 0`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`royal raceway`)
tiles.placeOnTile(Mario, tiles.getTileLocation(35, 45))
scene.cameraFollowSprite(Mario)
make_Item_Box_at_x_y(32, 15)
make_Item_Box_at_x_y(33, 15)
make_Item_Box_at_x_y(34, 15)
make_Item_Box_at_x_y(35, 15)
make_Item_Box_at_x_y(44, 9)
make_Item_Box_at_x_y(44, 10)
make_Item_Box_at_x_y(44, 11)
make_Item_Box_at_x_y(44, 12)
make_Item_Box_at_x_y(6, 40)
make_Item_Box_at_x_y(6, 41)
make_Item_Box_at_x_y(6, 42)
make_Item_Box_at_x_y(6, 43)
let countdown = sprites.create(assets.image`countdown3`, SpriteKind.ui)
countdown.setPosition(Mario.x, Mario.y)
music.play(music.createSoundEffect(WaveShape.Square, 261, 261, 255, 137, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
pause(500)
countdown.setImage(assets.image`countdown2`)
music.play(music.createSoundEffect(WaveShape.Square, 261, 261, 255, 137, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
pause(500)
countdown.setImage(assets.image`countdown1`)
music.play(music.createSoundEffect(WaveShape.Square, 261, 261, 255, 137, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
pause(500)
countdown.setImage(assets.image`countdownGo`)
music.play(music.createSoundEffect(WaveShape.Square, 523, 523, 255, 137, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
sprites.destroy(countdown)
music.play(music.createSong(assets.song`raceway`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    if (Direction == 330) {
        Mario.y += -2 * speed
        Mario.x += -1 * speed
    } else if (Direction == 300) {
        Mario.y += -1 * speed
        Mario.x += -2 * speed
    } else if (Direction == 270) {
        Mario.x += -2.5 * speed
    } else if (Direction == 240) {
        Mario.y += 1 * speed
        Mario.x += -2 * speed
    } else if (Direction == 210) {
        Mario.y += 2 * speed
        Mario.x += -1 * speed
    } else if (Direction == 180) {
        Mario.y += 2.5 * speed
    } else if (Direction == 150) {
        Mario.y += 2 * speed
        Mario.x += 1 * speed
    } else if (Direction == 120) {
        Mario.y += 1 * speed
        Mario.x += 2 * speed
    } else if (Direction == 90) {
        Mario.x += 2.5 * speed
    } else if (Direction == 60) {
        Mario.y += -1 * speed
        Mario.x += 2 * speed
    } else if (Direction == 30) {
        Mario.y += -2 * speed
        Mario.x += 1 * speed
    } else if (Direction == 0) {
        Mario.y += -2.5 * speed
    }
})
forever(function () {
    if (Direction == 330) {
        Mario.setImage(assets.image`Mario 330`)
    } else if (Direction == 300) {
        Mario.setImage(assets.image`Mario 300`)
    } else if (Direction == 270) {
        Mario.setImage(assets.image`Mario 270`)
    } else if (Direction == 240) {
        Mario.setImage(assets.image`Mario 210`)
    } else if (Direction == 210) {
        Mario.setImage(assets.image`Mario 240`)
    } else if (Direction == 180) {
        Mario.setImage(assets.image`Mario 180`)
    } else if (Direction == 150) {
        Mario.setImage(assets.image`Mario 150`)
    } else if (Direction == 120) {
        Mario.setImage(assets.image`Mario 120`)
    } else if (Direction == 90) {
        Mario.setImage(assets.image`Mario 90`)
    } else if (Direction == 60) {
        Mario.setImage(assets.image`Mario 60`)
    } else if (Direction == 30) {
        Mario.setImage(assets.image`Mario 30`)
    } else {
        Mario.setImage(assets.image`Mario 0`)
    }
})
forever(function () {
    pauseUntil(() => Mario.tileKindAt(TileDirection.Center, assets.tile`checkerboard`))
    LastCheckpoint = 0
    Lap += 1
    if (Lap == 2) {
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.InBackground)
        lap_counter = sprites.create(assets.image`LAP 2`, SpriteKind.ui)
        for (let index = 0; index < 100; index++) {
            lap_counter.setPosition(Mario.x, Mario.y)
            pause(1)
            lap_counter.changeScale(0.01, ScaleAnchor.Middle)
        }
        sprites.destroy(lap_counter, effects.disintegrate, 2000)
        for (let index = 0; index < 100; index++) {
            lap_counter.setPosition(Mario.x, Mario.y)
            pause(1)
            lap_counter.changeScale(0.01, ScaleAnchor.Middle)
        }
    } else if (Lap == 3) {
        music.stopAllSounds()
        lap_counter = sprites.create(assets.image`LAP 3`, SpriteKind.ui)
        music.play(music.createSong(assets.song`final lap`), music.PlaybackMode.InBackground)
        for (let index = 0; index < 100; index++) {
            lap_counter.setPosition(Mario.x, Mario.y)
            pause(1)
            lap_counter.changeScale(0.01, ScaleAnchor.Middle)
        }
        sprites.destroy(lap_counter, effects.disintegrate, 2000)
        for (let index = 0; index < 100; index++) {
            lap_counter.setPosition(Mario.x, Mario.y)
            pause(1)
            lap_counter.changeScale(0.01, ScaleAnchor.Middle)
        }
        pause(2000)
        music.play(music.createSong(assets.song`racewayfast`), music.PlaybackMode.LoopingInBackground)
    } else if (Lap == 4) {
        music.stopAllSounds()
        game.setGameOverMessage(true, "THANKS FOR PLAYING")
        game.gameOver(true)
    }
    pauseUntil(() => Mario.tileKindAt(TileDirection.Center, assets.tile`checkpoint-red`))
    LastCheckpoint = 1
    pauseUntil(() => Mario.tileKindAt(TileDirection.Center, assets.tile`checkpoint orange0`))
    LastCheckpoint = 2
    pauseUntil(() => Mario.tileKindAt(TileDirection.Center, assets.tile`checkpoint yellow0`))
    LastCheckpoint = 3
    pauseUntil(() => Mario.tileKindAt(TileDirection.Center, assets.tile`checkpoint green`) || Mario.tileKindAt(TileDirection.Center, sprites.castle.tileGrass3))
    LastCheckpoint = 4
})
forever(function () {
    if (in_control == 1) {
        if (controller.left.isPressed()) {
            Direction += -30
            pause(100)
        }
        if (controller.right.isPressed()) {
            Direction += 30
            pause(100)
        }
    }
})
forever(function () {
    if (Direction < 0) {
        Direction = 330
    }
    if (Direction > 330) {
        Direction = 0
    }
})
forever(function () {
    if (in_control == 1) {
        if (controller.A.isPressed() || controller.up.isPressed()) {
            if (tiles.tileAtLocationEquals(Mario.tilemapLocation(), sprites.castle.tileGrass1)) {
                speed += 0.06
            } else {
                speed += 0.12
            }
        }
        if (controller.down.isPressed()) {
            if (tiles.tileAtLocationEquals(Mario.tilemapLocation(), sprites.castle.tileGrass1)) {
                speed += -0.03
            } else {
                speed += -0.07
            }
        }
    }
    speed = speed * 0.9
})
forever(function () {
    if (Mario.tileKindAt(TileDirection.Center, assets.tile`dash panel bottom left`) || Mario.tileKindAt(TileDirection.Center, assets.tile`dash panel left`) || Mario.tileKindAt(TileDirection.Center, assets.tile`dash panel right`)) {
        music.play(music.createSoundEffect(WaveShape.Noise, 1102, 2163, 255, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        Mario.startEffect(effects.blizzard, 500)
        for (let index = 0; index < 100; index++) {
            speed = 2
            pause(1)
        }
    }
})
forever(function () {
    if (item > 0) {
        item_spinner.setPosition(Mario.x + 60, Mario.y - 40)
    }
})
forever(function () {
    Kart_Z_pos += zposamounttochange
    Mario.setScale(Kart_Z_pos * 0.05 + 1, ScaleAnchor.Middle)
})
forever(function () {
    if (Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp`)) {
        music.play(music.createSoundEffect(WaveShape.Sine, 217, 2261, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        zposamounttochange = 1
        pauseUntil(() => !(Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp`)))
    }
    if (Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp up`)) {
        music.play(music.createSoundEffect(WaveShape.Sine, 217, 2261, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        zposamounttochange = 1
        pauseUntil(() => !(Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp up`)))
    }
    if (Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp down`)) {
        music.play(music.createSoundEffect(WaveShape.Sine, 217, 2261, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        zposamounttochange = 1
        pauseUntil(() => !(Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp down`)))
    }
    if (Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp right`)) {
        music.play(music.createSoundEffect(WaveShape.Sine, 217, 2261, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        zposamounttochange = 1
        pauseUntil(() => !(Mario.tileKindAt(TileDirection.Center, assets.tile`jump ramp right`)))
    }
})
forever(function () {
    if (Mario.tileKindAt(TileDirection.Center, assets.tile`water`) && Kart_Z_pos <= 0) {
        in_control = 0
        speed = 0
        color.startFade(color.originalPalette, color.Black, 500)
        pause(1000)
        if (LastCheckpoint == 0) {
            tiles.placeOnRandomTile(Mario, assets.tile`checkerboard`)
            Direction = 0
        } else if (LastCheckpoint == 1) {
            tiles.placeOnRandomTile(Mario, assets.tile`checkpoint-red`)
            Direction = 0
        } else if (LastCheckpoint == 2) {
            tiles.placeOnRandomTile(Mario, assets.tile`checkpoint orange0`)
            Direction = 270
        } else if (LastCheckpoint == 3) {
            tiles.placeOnRandomTile(Mario, assets.tile`checkpoint yellow0`)
            Direction = 90
        } else if (LastCheckpoint == 4) {
            tiles.placeOnRandomTile(Mario, assets.tile`checkpoint green`)
            Direction = 90
        }
        color.startFade(color.Black, color.originalPalette, 500)
        in_control = 1
    }
})
forever(function () {
    if (Kart_Z_pos > 0) {
        zposamounttochange += -0.2
        pause(100)
    }
    if (Kart_Z_pos < 0) {
        Kart_Z_pos = 0
    }
    if (Kart_Z_pos < 0.1) {
        Kart_Z_pos = 0
        in_control = 1
    }
    if (zposamounttochange < -0.7) {
        zposamounttochange = 0
    }
})
forever(function () {
    if (Kart_Z_pos > 0) {
        for (let index7 = 0; index7 <= tiles.getTilesByType(assets.tile`block blue`).length; index7++) {
            tiles.setWallAt(tiles.getTilesByType(assets.tile`block blue`)[index7], false)
        }
        pauseUntil(() => Kart_Z_pos == 0)
        for (let index8 = 0; index8 <= tiles.getTilesByType(assets.tile`block blue`).length; index8++) {
            tiles.setWallAt(tiles.getTilesByType(assets.tile`block blue`)[index8], true)
        }
    }
})
