import { cards } from '../../components/stores/cards';
import { nodes } from '../../components/stores/nodes';
import { authenticatedUser } from '../../components/stores/authenticatedUser';

import { currentView } from '../document/../../../stores'


export const addRecord = (cardId) => {
    console.log('add record running.........', cardId);
    // 1. Create new id {using the bottom id - this will have to use newId later}
    const newId = nodes[Object.keys(nodes)[Object.keys(nodes).length - 1]].id + 1;
    console.log('newId', newId);

    // 2. Add newRecord
    // to item array
    nodes.update((val) => {
        val[cardId].items.push({ id: newId });
        return val;
    });
    // $nodes[cardId].items.push({ id: newId });

    //to $nodes
    const newNode = { id: newId, items: [],cols:false };
    nodes.update((val) => {
        val = { ...val, [newId]: newNode };
        return val;
    });
    // $nodes = { ...nodes, [newId]: newNode };

    // 3. Add new card to cards
    const newItem = { id: newId, items: [], cols: false };
    const newCard = {
        componentId: newId,
        url: null,
        imageUrl:null,
        allTags: [],
        notes:null,
        usersVersion: {
            userId: { userId: authenticatedUser.userId, versionId: 1 }
        },
        versions: {
            1: {
                title: '',
                imageUrl: '',
    
            }
        }
    };

    cards.update((val) => {
        val = { ...val, [newId]: newCard };
        return val;
    });
};