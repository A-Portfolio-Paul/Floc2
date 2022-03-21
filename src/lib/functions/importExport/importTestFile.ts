//This file is used to check against in the import.test.js
export const importAnswer={
    id:1,                           // unique id of doc
    countributors:[], 
    contributorDetails:{            // contrinbutor details
        1:{
            id:1,
            name:'Paul'
        },
        2:{
            id:2,
            name:'Jane'
        }
    },
    usersViews:{
        1:{
            componentId: 1,
            url: 'https://en.wikipedia.org/wiki/Bicycle',
            allTags: ['lesiure', 'sport', 'machines'],
			title: 'Which Bicycle Should I Buy',
			imageUrl: 'https://www.cyclingabout.com/wp-content/uploads/2014/01/wpid-Photo-29-Jan-2014-214-pm.jpg',
			notes:
				`If you’re in the market for a new bicycle, you’re in very good company. Since the start of 2020 all bike sales have risen by more than 50 percent, and even if you’re reading this guide in 2023, and perhaps sales have finally flattened, that will be at a new, higher bar. 
				
The e-bike category in particular has seen astonishing growth lately.\t \t \t Why? \tOne effect of the pandemic was a resurgent interest in outdoor fitness (to avoid COVID-19), and once people rediscovered fresh air and mood-lifting daylight, lots of us realized we never wanted to head back inside for cardiovascular exercise.
				
That, and a desire to pollute less, especially if you’re lucky enough to work from home, has led to a proliferation of many direct-to-consumer bicycle brands. (We’ll tackle how to buy a bicycle, electrified or not, below, but we’re planting a flag right here to caution that you should carefully read that section before jumping directly to a bike you’d order online.)`
			},
        },

    }




const cards = {
	1: {
		componentId: 1,
		url: 'https://en.wikipedia.org/wiki/Bicycle',
		allTags: ['lesiure', 'sport', 'machines'],
		usersVersion: {
			// userId:{ userId :1, versionId :1}
			1: { userId: 1, versionId: 1 },
			2: { userId: 2, versionId: 2 }
		},
		versions: {
			1: {
				title: 'Which Bicycle Should I Buy',
				imageUrl: 'https://www.cyclingabout.com/wp-content/uploads/2014/01/wpid-Photo-29-Jan-2014-214-pm.jpg',
				notes:
				`If you’re in the market for a new bicycle, you’re in very good company. Since the start of 2020 all bike sales have risen by more than 50 percent, and even if you’re reading this guide in 2023, and perhaps sales have finally flattened, that will be at a new, higher bar. 
				
The e-bike category in particular has seen astonishing growth lately.\t \t \t Why? \tOne effect of the pandemic was a resurgent interest in outdoor fitness (to avoid COVID-19), and once people rediscovered fresh air and mood-lifting daylight, lots of us realized we never wanted to head back inside for cardiovascular exercise.
				
That, and a desire to pollute less, especially if you’re lucky enough to work from home, has led to a proliferation of many direct-to-consumer bicycle brands. (We’ll tackle how to buy a bicycle, electrified or not, below, but we’re planting a flag right here to caution that you should carefully read that section before jumping directly to a bike you’d order online.)`
			},
            
			
		}
	},