describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood')
	}));

  it ('should filter by the food enterted', function () {

    var fakePeople = [{
      name: "Eric",
      favoriteFood: "Sandwiches"
    }, {
      name: "Molly",
      favoriteFood: "Nachos"
    }]

    expect(favoriteFood(fakePeople,"Sandwiches").length).toBe(1)
    expect(favoriteFood(fakePeople,"Sandwiches")[0].name).toEqual("Eric")

  })

	
});
