templates.remark = (vars) => { 
	let dl = document.createElement('dl');
	dl.classList.add('remark');

	let dt = document.createElement('dt');
	dt.classList.add('remark__verb');
	dt.innerText = vars.prop;
	dl.appendChild(dt);
	
	for (item of vars.vals) {
		let dd = document.createElement('dd');
		dd.classList.add('remark__object');
		dd.appendChild(item);
		dl.appendChild(dd);
	}

	let style = document.createElement('link');
	style.setAttribute('rel',  "stylesheet");
	style.setAttribute('href', "components/remark/remark.css");

	dl.appendChild(style);
	return dl;
}