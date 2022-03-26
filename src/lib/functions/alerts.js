	 import {alerts} from '../stores'
    
    // update alerts
	const updateAlert = (msg, msgType) => {
		console.log('alert: ',msg)
		alerts.update((val) => {
			val = { msg: msg, msgType: msgType };
			return val;
		});
	};

    export {updateAlert}