export default [
    { name: 'Title', type: 'h1', width: 300, height: 50, text: 'your title' },
    { name: 'Content block', type: 'div', width: 300, height: 100, text: 'your text' },
    { name: 'Paragraph', type: 'p', width: 300, height: 50, text: 'your paragraf' },
    {
        name: 'List',
        text: '',
        type: 'ul',
        width: 300,
        height: 150,
        children: [
            { text: 'item-1' },
            { text: 'item-2' },
            { text: 'item-3' },
            { text: 'item-4' },
        ],
    },
    { name: 'Button', type: 'button', width: 100, height: 50, text: 'your button' },
];
