/// <reference path="../pb_data/types.d.ts" />
/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    name: 'posts',
    schema: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'content',
        type: 'text',
        required: true,
      }
    ]
  });

  return db.dao.saveCollection(collection);
}, (db) => {
  const collection = db.dao.findCollectionByNameOrId('posts');
  return db.dao.deleteCollection(collection);
});

