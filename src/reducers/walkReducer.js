const initialState = {
  walks: [
    {
      id: 1,
      title: 'randonnée number 1',
      date: '2020-05-16T03:15:09+00:00',
      duration: 4,
      difficulty: 'facile',
      description: 'Unde ut eaque facilis dolorum consequatur. Enim ducimus cupiditate velit alias temporibus et quam. Qui deleniti quia eos incidunt odit inventore maiores. Qui culpa aut illo et.',
      area: {
        id: 3,
        name: 'Provence-Alpes-Côte d\'Azur',
        color: '#FD827D',
      },
    },
    {
      id: 2,
      title: 'randonnée number 2',
      date: '2020-06-16T03:15:09+00:00',
      duration: 4,
      difficulty: 'facile',
      description: 'Unde ut eaque facilis dolorum consequatur. Enim ducimus cupiditate velit alias temporibus et quam. Qui deleniti quia eos incidunt odit inventore maiores. Qui culpa aut illo et.',
      area: {
        id: 3,
        name: 'Provence-Alpes-Côte d\'Azur',
        color: '#FD827D',
      },
    },
  ],
};

function walkReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default walkReducer;
