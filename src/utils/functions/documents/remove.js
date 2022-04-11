import { currentView } from '../../stores';





export const removeRecord = (cardId) => {
	let nodes;
currentView.subscribe((value) => {
	console.log('add:', value.cardMap);
	nodes = value.cardMap;
});
	const getParentId = (childId) => {
		const findId = (id, myarr) => {
			let res;
			for (let i = 0; i < myarr.length; i++) {
				if (myarr[i].id == id) return true;
			}
			return false;
		};
		for (const key in nodes) {
			let nodeArr = nodes[key].items;
			if (findId(childId, nodeArr) == true) {
				return key;
			}
		}
	};
	const parentId = getParentId(cardId);
	console.log('parentId', parentId);
	// alert('no more alerts')
	console.log('remove Record running....cardId:', cardId);
	// 1. remove card from items

	const items = nodes[parentId].items;
	const getIndex = () => {
		for (let i = 0; i < items.length; i++) {
			console.log('LOOP:', items[i]);
			if (items[i].id == cardId) {
				return i;
			}
		}
	};
	const cardIndex = getIndex(cardId);
	currentView.update((val) => {
		val.cardMap[parentId].items.splice(cardIndex, 1);
		return val;
	});
	//2. remove card from nodes
	currentView.update((val) => {
		val.cardMap[cardId].items.splice(cardIndex, 1);
		return val;
	});
};
