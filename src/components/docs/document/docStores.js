import { writable } from 'svelte/store'

export const flowers = writable([
  {
    id: 1,
    rating: 10,
    title:'A Yellow Daffodil',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    title:'A Red Rose',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    title:'A Purple Pansy',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
])
//d
export const baskets = writable([
  {
    "name": "Basket 1",
    "items": ["Orange", "Pineapple"]
  },
  {
    "name": "Basket 2",
    "items": ["Banana", "Apple"]
  },
  {
    "name": "Basket 3",
    "items": ["GrapeFruit"]
  },
  {
    "name": "Basket 4",
    "items": ["peach"]
  }
  ])
export const componentView = writable([
  {'id':0,'name':'Paul'},
  {'id':1,'name':'Bob'}
])
  
export const componentViews = writable([{
  // This data structure has been changed to be only arrays 
        'docViewId':1,
        'allComponentIds':[1,2,3],
        'docId':1, 
        'componentHierachy':
            [
             {
                'componentId':1,
                'versionId':1,
                'parentId':null,
                'children':[2,3],   //this filed is obsolete left in for checking
                // 'siblings':[], //this filed is obsolete left in to remoind me about this feature
                'level':'paragraph'},
            {
                'componentId':2,
                'versionId':1,
                'parentId':1,
                'children':[], //this filed is obsolete left in for checking
                // 'siblings':[], //this filed is obsolete left in for checking
                'level':'word'},
            {
                'componentId':3,
                'versionId':1,
                'parentId':1,
                'children':[], //this filed is obsolete left in for checking
                // 'siblings':[], //this filed is obsolete left in for checking
                'level':'word'}
            ],
        },
        {
            'docViewId':2,
            'allComponentIds':[1,2],
            'docId':1,
            'componentHierachy':
            [
                {
                   'componentId':1,
                   'versionId':1,
                   'parentId':null,
                   'children':[2], //this filed is obsolete left in for checking
                //    'siblings':[], //this filed is obsolete left in for checking
                   'level':'paragraph'}, 
               {
                   'componentId':2,
                   'versionId':1,
                   'parentId':1,
                   'children':[], //this filed is obsolete left in for checking
                //    'siblings':[], //this filed is obsolete left in for checking
                   'level':'word'}
               ], 
        },  
])