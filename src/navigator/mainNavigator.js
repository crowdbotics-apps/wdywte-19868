import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings95298Navigator from '../features/Settings95298/navigator';
import Settings95283Navigator from '../features/Settings95283/navigator';
import NotificationList95282Navigator from '../features/NotificationList95282/navigator';
import Maps95281Navigator from '../features/Maps95281/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings95298: { screen: Settings95298Navigator },
Settings95283: { screen: Settings95283Navigator },
NotificationList95282: { screen: NotificationList95282Navigator },
Maps95281: { screen: Maps95281Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
