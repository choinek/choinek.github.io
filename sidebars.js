module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Category Level 1',
      items: ['doc1', {
        type: 'category',
        label: 'Category Level 2',
        items: ['doc2', 'doc3', {
          type: 'category',
          label: 'Category Level 3',
          items: ['category/doc4', 'category/doc5', 'extra-doc'],
        }],
      }],
    },
  ],
};