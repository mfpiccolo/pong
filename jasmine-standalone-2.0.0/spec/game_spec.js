describe("Pong", function() {
  var game
  var canvas

  beforeEach(function() {
    canvas = $("canvas")[0],
    game = new Game(canvas)
  })

  it("canvas should have a black background", function() {
    expect(canvas.height).toEqual(150)
    expect(canvas.width).toEqual(300)
  })
})

