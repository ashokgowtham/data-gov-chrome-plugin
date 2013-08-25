//alert(window.title)
debugger;

function createJsonButton (dataSet) {
	return "<a style='background:#faa; padding:5px; display:block; border-radius:15px; box-shadow:inset 0 0 10px -2px #000; font-weight:bold; color:#fff;' onclick='linkClicked()'>JSON</a>"
}

function AddAdditionalButtons (dataSet) {
	var link = document.createElement('a');
	link.innerHTML = "JSON";
	link.tag=dataSet.tag;

	$(link).one('click', function (e) {
		e.preventDefault();
		link.setAttribute('href','http://fileconvertservice.herokuapp.com/files/converted/sample.json')

		if (dataSet.tag === 1) {
			link.innerHTML="Download";
		} else {
			link.innerHTML = "In Progress...";
			$(link).attr('href','#');
		}
	})
	dataSet.buttonContainer.appendChild(link);
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
			buttonContainers[i],i%2);
		processDataSet(dataSet);
	};
}

main();

function DataSet (name, buttonContainer, tag) {
	this.name = name;
	this.buttonContainer = buttonContainer;
	this.tag = tag;
}

function linkClicked () {
	alert('')
}