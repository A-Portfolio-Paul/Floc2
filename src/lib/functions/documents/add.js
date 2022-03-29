// import { authenticatedUser } from '../../components/stores/authenticatedUser';
import { currentView } from '../../stores';
import { user_mock } from '../../stores';

export const addRecord = (cardId) => {
	console.log('add running: ARG:',cardId);
	let nodes;
	currentView.subscribe((value) => {
		console.log('add:', value.cardMap);
		nodes = value.cardMap;
	});

	// 1. Create new id {using the bottom id - this will have to use newId later}
    // * WORKING
	const newId = nodes[Object.keys(nodes)[Object.keys(nodes).length - 1]].id + 1;
	// 2. CardMap parent updated
	currentView.update((val) => {
		val.cardMap[cardId].items.push({ id: newId });
		console.log('cur Issue:Update parent',val)
		return val;
	});
	// * CardMap updated with new entry
	const newNode = { id: newId, items: [], cols: false };
	currentView.update((val) => {
		val.cardMap[newId]=newNode
                return val;
	});
	// ! 3. Add new card to cards
	const newItem = { id: newId, items: [], cols: false };
	const newCard = {
		cardId: newId,
		tags: [],
		title: 'New Card',
		imageUrl: '',
		notes: ''
	};
	currentView.update((val) => {
		const newCards = { ...val.cards, [newId]: newCard };
		console.log('newCards', newCards);
		val = { ...val, 'cards':newCards };
		console.log('FINAL: NEW CARD:', val);
		return val;
	});
};
