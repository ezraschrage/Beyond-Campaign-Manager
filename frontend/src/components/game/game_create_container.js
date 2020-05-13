import { connect } from 'react-redux';
import { createGame } from '../../actions/game_actions';
import {getCharacters, searchCharacters} from '../../actions/character_actions';
import {fetchMonster, searchMonsters} from '../../actions/rules_actions';
import GameCreate from './game_create';
import {withRouter} from 'react-router-dom'

const msp = (state) =>({
    monsters: Object.values(state.entities.monsters),
    characters: Object.values(state.entities.characters),
    errors: state.errors.entities,
});

const mdp = dispatch => {
    return {
        searchMonsters: (monster) => dispatch(searchMonsters(monster)),
        fetchMonster: (monster) => dispatch(fetchMonster(monster)),
        createGame: (game) => dispatch(createGame(game)),
        getCharacters: () => dispatch(getCharacters()),
        searchCharacters: (name) => dispatch(searchCharacters(name)),
    };
};

export default withRouter(connect(msp, mdp)(GameCreate));