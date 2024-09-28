/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
 db.collection('posts').create({
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
}, (db) => {
  // add down queries...
})
