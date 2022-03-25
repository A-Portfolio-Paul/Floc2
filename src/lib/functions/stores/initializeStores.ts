// user -> views -> docs

// Current Editable Document
export const curDoc = (documents,id)=>{
    let res = documents.filter(function (e) {
        return e.docId > id;
    });
}
// All views for the current Document
export const curViews = (views,curDocId) =>{
    let res = views.filter(function (e) {
         return e.docId == curDocId
     });
}
// The users view for the current document
export const curView = (currentViews,userId) =>{
    let res = currentViews.filter(function (e) {
         return e.userId == userId
     });
}
