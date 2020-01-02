/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import { connect } from 'react-redux';
import {
  dashNotify,
  triggerDash,
  triggerProfile
} from '../../actions/UiAction';
import '../../components/dashboard/dashboard.scss';
import Dashboard from '../../components/dashboard/Dashboard';

const mapStateToProps = state => {
  return {
    UiReducer: state.UiReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dashNotify: () => {
      dispatch(dashNotify());
    },
    triggerDash: () => {
      dispatch(triggerDash());
    },
    triggerProfile: () => {
      dispatch(triggerProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
