import request from 'superagent';
const API_KEY='134d59bca896ab163d77fc4e06cbd20e';
// ===== GET / POST helper functions ===========================================

// I'd love to take the credit for this one, but it comes to us from:
// http://blog.nicohaemhouts.com/2015/08/03/accessing-nested-javascript-objects-with-string-key/
// It takes two args: a Javascript object, and a string representing the path
// to properties nested within that object.
const getNested = (obj, path) => {
	try {
		if (path !== '') {
			return path
				.split('.')
				.reduce((no, property) => no[property], obj);
		}
		return obj;
	} catch (err) {
		return undefined;
	}
};

const doGet = (url, responseReturnPath, httpStatusCode) => new Promise((resolve, reject) => {
	request
		.get(url)
		.set('Accept', 'application/json')
		.end((err, res) => {
			if (res && res.statusCode === httpStatusCode) {
				resolve(getNested(res, responseReturnPath));
			} else {
				reject(err);
			}
		});
});

const doPost = (url, payload, responseReturnPath, httpStatusCode) => new Promise((resolve, reject) => {
	request
		.post(url)
		.send(payload)
		.set('Accept', 'application/json')
		.end((err, res) => {
			if (res && res.statusCode === httpStatusCode) {
				resolve(getNested(res, responseReturnPath));
			} else {
				reject(err);
			}
		});
});

const doPut = (url, payload, responseReturnPath, httpStatusCode) => new Promise((resolve, reject) => {
	request
		.put(url)
		.send(payload)
		.set('Accept', 'application/json')
		.end((err, res) => {
			if (res && res.statusCode === httpStatusCode) {
				resolve(getNested(res, responseReturnPath));
			} else {
				reject(err);
			}
		});
});


// ==============================================================================================
// *                         
// *                 Methods for application
// *
// ==============================================================================================


const cityAndCounty = (city, country) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
        
}