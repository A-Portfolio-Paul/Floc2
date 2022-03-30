import { documents } from '../../stores';

export const removeDocument = (docId) => {
    console.log('removeDocument running....')
	//just removing from documents store at the moment
	// * will have to delte all user related entries at some point - maybe safer not to at the moment
	documents.update((value) => {
		const filteredLst = value.filter(function (e) {
			return e.docId != docId;
		});
        value = filteredLst
        return value
		console.log('filteredLst', filteredLst);
	});
};
