describe("Pong", function() {
  var game
  var canvas

  beforeEach(function() {
    canvas = $("canvas")[0],
    game = new Game(canvas)
  })

  it("canvas a set width and height", function() {
    expect(canvas.height).toEqual(150)
    expect(canvas.width).toEqual(300)
  })
})

