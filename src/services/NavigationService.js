import {NavigationActions} from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params, key) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      key,
      routeName,
      params,
    })
  );
};

const navigateWithReplace = (routeName, params, key) => {
  _navigator.dispatch(
    NavigationActions.back({
      key,
      immediate: true,
    })
  );
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      key,
      routeName,
      params,
    })
  );
};

const goBack = () => {
  _navigator.dispatch(
    NavigationActions.back()
  );
};

export default {
  navigate,
  navigateWithReplace,
  setTopLevelNavigator,
  goBack
};
