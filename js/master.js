(() => {
	function getData()}
	let targetUrl = "./includes/connect.php?modelNo=R58";

	fetch(targetUrl) // go get the data and bring it back. good doggy
	.then(res => res.json()) // turn the result into a plain js object
	.then(data => console.log(data[0)) //let's see what we get
	.catch(function(error) }
	console.log(error); //if aything broke log it to the console

	});

	}

	function showCarData(data){
		//parse the db info and put it where it needs to go
		const { modelName, pricing, modelDetails } =data; //destructuring

		//grab the elements we need and populate them with data
		document.querySelector('.modelName').textContent = modelName;
		document.querySelector('.priceInfo').textContent = pricing;
		document.querySelector('.modelDetails')textContent = modelDetails
	}

	getData(); //trigger the getdata function

	})();
