export default (form, action) => {
  switch (action.type) {

    case 'UPDATE_PLAYER': {
      const players = [...form.players];
      players[action.index] = action.player;

      return {
        ...form,
        players,
      };
    }

    case 'UPDATE_CHARACTER': {
      const characters = [...form.characters];
      characters[action.index] = action.character;

      return {
        ...form,
        characters,
      };
    }

    case 'UPDATE_SCORE': {
      const score = [...form.score];
      score[action.index] = action.score;

      return {
        ...form,
        score,
      };
    }

    default:
      return form;
  }
};
