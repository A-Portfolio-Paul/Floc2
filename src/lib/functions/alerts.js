	 import {alerts} from '../stores'
    
    // update alerts
	const updateAlert = (msg, msgType) => {
		console.log('updateAlert running.....')
		alerts.update((val) => {
			val = { msg: msg, msgType: msgType };
			return val;
		});
	};

    export {updateAlert}