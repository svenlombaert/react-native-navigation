const { component, stack } = require('../commons/Layouts');
const SideMenuLeft = 'SideMenuLeft';
const SideMenuCenter = 'SideMenuCenter';
const SideMenuRight = 'SideMenuRight';
const StatusBarCenter = 'StatusBarCenter';

module.exports = {
  ExternalComponent: 'ExternalComponent',
  ContextScreen: 'ContextScreen',
  Pushed: 'Pushed',
  Layouts: 'Layouts',
  Options: 'Options',
  Stack: 'Stack',
  Modal: 'Modal',
  SetRoot: 'SetRoot',
  Overlay: 'Overlay',
  OverlayAlert: 'OverlayAlert',
  ScrollViewOverlay: 'ScrollViewOverlay',
  Lifecycle: 'Lifecycle',
  BackHandler: 'BackHandler',
  BottomTabs: 'BottomTabs',
  FirstBottomTabsScreen: 'FirstBottomTabsScreen',
  SecondBottomTabsScreen: 'SecondBottomTabsScreen',
  Navigation: 'Navigation',
  NativeScreen: 'RNNCustomComponent',
  RoundButton: 'CustomRoundedButton',
  ReactTitleView: 'ReactTitleView',
  EventsScreen: 'EventsScreen',
  EventsOverlay: 'EventsOverlay',
  SideMenuLeft,
  SideMenuCenter,
  SideMenuRight,
  SideMenu: {
    sideMenu: {
      left: component(SideMenuLeft),
      center: component(SideMenuCenter)
    }
  },
  StatusBar: {
    sideMenu: {
      left: {
        component: {
          id: 'left',
          name: SideMenuLeft,
          passProps: {
            marginTop: 20
          },
          options: {
            statusBar: {
              drawBehind: true,
              translucent: true
            }
          }
        }
      },
      center: stack(StatusBarCenter),
      right: {
        component: {
          id: 'right',
          name: SideMenuRight
        }
      }
    }
  },
  StatusBarCenter,
  FlatListScreen: 'FlatListScreen',
  Alert: 'Alert',
  Orientation: 'Orientation',
  OrientationDetect: 'OrientationDetect',
  Search: 'Search'
}
