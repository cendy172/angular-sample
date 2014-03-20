baseApp.factory('Items', [function(){
	var items = {};
	items.query = function(){
		return [
			{'title': 'Paint pots', 'quantity': 8, 'price': 3.95},
			{'title': 'Pollka dots', 'quantity': 17, 'price': 12.95} ,
			{'title': 'Pebbles', 'quantity': 5, 'price': 6.95}
		];
	};
	return items;
}]);