var expect = require(`chai`).expect

describe(`checkForShip`, function() {
  var checkForShip = require(`../game_logic/ship_methods`).checkForShip

  it(`should correctly report no ship at a given players coordinate`, function() {
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };
    expect(checkForShip(player, [9, 9])).to.be.false
  }),

  it(`should correctly report a ship at a given players coordinate`, function() {
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
  }),

  it(`should handle ships located at more than 1 coordinate`, function() {
    player = {
      ships: [
        {
          locations: [[0, 0], [0, 1]]
        },
        {
          locations: [[1, 1], [6, 1]]
        },
        {
          locations: [[4, 1], [5, 1], [3, 1], [0, 1]]
        }
      ]
    };
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0])
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
    expect(checkForShip(player, [9, 9])).to.be.false
    expect(checkForShip(player, [5, 1])).to.deep.equal(player.ships[2])
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1])
    expect(checkForShip(player, [3, 1])).to.deep.equal(player.ships[2])
  })
})

describe(`checkForShip`, function() {
  var damageShip = require(`../game_logic/ship_methods`).damageShip

  it(`should register damage on a given ship at a given location`, function() {
    var ship = {
      location: [[0, 0]],
      damage: []
    }; // end ship object

    damageShip(ship, [0,0]);

    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  }); // end it
}) // end describe

describe(`fire`, function() {
  var fire = require(`../game_logic/ship_methods`).fire

  it(`should record damage on the given players ship at a given coordinate`, function() {
    var player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: []
        }
      ]
    }
    fire(player, [0, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal[0, 0]
  }); // end it
}) // end describe
