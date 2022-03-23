//import cards
import { cards1 } from './cards1';
import { cards2 } from './cards2';

export const documentMock = {
	docId: 1, // unique id of doc
	countributors: [], // all ids of contrinbuters to the document
	contributorDetails: {
		// contrinbutor details
		1: {
			id: 1,
			name: 'Paul'
		},
		2: {
			id: 2,
			name: 'Jane'
		}
	},
	// Each user can have a unique version of the Document
	userVersion: {
		1: {
			userId: 1,
			cardMap: {
				1: { id: 1, items: [{ id: 2 }, { id: 3 }] },
				2: { id: 2, items: [{ id: 4 }, { id: 5 }] },
				3: { id: 3, items: [] },
				4: { id: 4, items: [] },
				5: { id: 5, items: [{ id: 6 }] },
				6: { id: 6, items: [] }
			},
			cards: cards1
		},
		2: {
			userId: 2,
			cardMap: {
				1: { id: 1, items: [{ id: 2 }, { id: 3 }] },
				2: { id: 2, items: [{ id: 4 }, { id: 5 }] },
				3: { id: 3, items: [] },
				4: { id: 4, items: [] },
				5: { id: 5, items: [{ id: 6 }] },
				6: { id: 6, items: [] }
			},
			cards: cards2
		}
	}
};
