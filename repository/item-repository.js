let items = [
     {
         'description': 'Drake Sweatpants',
         'image': '',
         'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
         'price': 60
     },

     {
         'description': 'Drake Sweatshirt',
         'image': '',
         'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f27',
         'price': 75
     }
 ];

 const selectItems = () => ({
     rows: items
 });

 const selectItemByItemId = (itemId) =>
     items.find((item) => item['item_id'] === itemId);

 const insertItem = (item) => items.push(item);

 const updateItem = (updatedItem) => {
     const itemsThatDontMatch = items.filter((item) =>
         item['item_id'] !== updatedItem['item_id']
     );

     items = [
         ...itemsThatDontMatch, updatedItem
     ];
 };

 const deleteItemByItemId = (itemId) => {
     items = items.filter((item) =>
         item['item_id'] !== itemId
     );
 };

 module.exports = {
     deleteItemByItemId,
     insertItem,
     selectItemByItemId,
     selectItems,
     updateItem
 };