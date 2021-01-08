import {connect} from 'react-redux';
import Column from './Column';
import {getCardsforColumn, createActionAddCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsforColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
