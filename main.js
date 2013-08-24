alert(window.title)
debugger;

function createJsonButton (dataSet) {
	return "<a style='background:#faa; padding:5px; display:block; border-radius:3px; font-weight:bold; color:#fff;'>JSON</a>"
}

function AddAdditionalButtons (dataSet) {
	dataSet.buttonContainer.append(createJsonButton(dataSet));
}

function processDataSet (dataSet) {
	AddAdditionalButtons(dataSet);
}

function getDatasetsNames () {
	var names = $("table tr td:nth-child(2) p a");
	for (var i = 0; i < names.length; i++) {
		names[i] = $(names[i]).attr('title');
	};
	return names;
}

function getButtonContainers() {
	return $("table tr td:nth-child(6)");
}

function main() {
	var datasetsNames = getDatasetsNames();
	var buttonContainers = getButtonContainers();
	for (var i = 0; i < datasetsNames.length; i++) {
		var dataSet = new DataSet(datasetsNames[i],
			$(buttonContainers[i]));
		processDataSet(dataSet);
	};
}

main();

function DataSet (name, buttonContainer) {
	this.name = name;
	this.buttonContainer = buttonContainer;
}
