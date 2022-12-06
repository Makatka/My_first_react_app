const initialState = {
  columns: [
    {
      id: '1',
      title: 'Books',
      icon: 'book',
      listId: '1'
    },
    {
      id: '2',
      title: 'Movies',
      icon: 'film',
      listId: '1'
    },
    {
      id: '3',
      title: 'Games',
      icon: 'gamepad',
      listId: '1'
    },
    {
      id: '4',
      title: 'TV  Series',
      icon: 'film',
      listId: '2'
    }
  ],

  cards: [
    {id: '1', columnId: '1', title: 'This is Going to Hurt', isFavorite: true},
    {id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavorite: true},
    {id: '3', columnId: '2', title: 'Harry Potter', isFavorite: true},
    {id: '4', columnId: '2', title: 'Star Wars', isFavorite: false},
    {id: '5', columnId: '3', title: 'The Witcher', isFavorite: false},
    {id: '6', columnId: '4', title: 'Dr House', isFavorite: true},
    {id: '7', columnId: '4', title: 'Succession', isFavorite: false},
    {id: '8', columnId: '4', title: 'The Office', isFavorite: false},
    {id: '9', columnId: '4', title: 'Lost', isFavorite: false},
    {id: '10', columnId: '4', title: 'Keeping Up Appearances', isFavorite: false}
  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
    {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
    }
  ],

  searchTitle: '',
};

export default initialState;