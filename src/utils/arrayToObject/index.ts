function arrayToObject (array, id) {
	let object = array.reduce((object, element, key) => {

		if (element.hasOwnProperty(id)) {
			object[element[id]] = element; 
		}

		if (element.hasOwnProperty('id')) {
			object[element.id] = element; 
		}

		object[key] = element; 
		return object; 
	}, 
		{}
  );
  return object
}

export default arrayToObject