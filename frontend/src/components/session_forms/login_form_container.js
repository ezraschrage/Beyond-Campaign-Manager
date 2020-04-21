import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
    errors: state.errors.session,
});

const mdp = (dispatch) => ({
    login: user => dispatch(login(user)),
    loginForm: () => dispatch(openModal("loginForm")),
    signupForm: () => dispatch(openModal("signupForm")),
    closeModal: () => dispatch(closeModal())
})


export default connect(msp, mdp)(LoginForm);