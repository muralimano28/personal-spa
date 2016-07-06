const Utils = {
	updateClassName: (element, className, remove) => {
		if (!element) {
			return;
		}
		var currentClass = element.className,
		regex = new RegExp(className, 'g');

		currentClass = currentClass.replace(regex, '');

		if (remove !== true) {
			currentClass += " " + className;
		}
		element.className = currentClass.trim();
		return element;
	},
	findIndexByValue: (objArr, property, value) => {
		if (!objArr) {
			return -1; }

		var result = -1;
		objArr.some((item, i) => {
			if (item[property] === value) {
				result = i;
				return true;
			}
		});
		return result;
	}
};

export default Utils;
