import $ from 'jquery';

function isAuthorized(component) {
  $.post(
    '/isauthorized',
    {},
    (res) => {
      component.setState({isAuthorized: res.isAuthorized});
      component.setState({currentUser: res.currentUser});
      component.setState({restriction: res.restriction});
    }
  );
}

export default isAuthorized;
