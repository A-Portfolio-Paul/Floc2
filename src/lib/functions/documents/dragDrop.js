import { currentView } from '../../stores';

export const handleDndConsider = (e, changeState) => {
	changeState(e.detail.items);
};

export const handleDndFinalize = (e,cardId) => {
	currentView.update((val) => {
        console.log('ARG:e',e)
        console.log('ARG:cardId',cardId)
		val[0].cardmap[cardId].items = e.detail.items;
		return val;
	});
};
