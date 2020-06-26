import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps71741Navigator from '../features/Maps71741/navigator';
import Settings71719Navigator from '../features/Settings71719/navigator';
import Settings71704Navigator from '../features/Settings71704/navigator';
import NotificationList71703Navigator from '../features/NotificationList71703/navigator';
import Maps71702Navigator from '../features/Maps71702/navigator';
import ArticleList71685Navigator from '../features/ArticleList71685/navigator';
import ArticleList71684Navigator from '../features/ArticleList71684/navigator';
import ArticleList71683Navigator from '../features/ArticleList71683/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps71741: { screen: Maps71741Navigator },
Settings71719: { screen: Settings71719Navigator },
Settings71704: { screen: Settings71704Navigator },
NotificationList71703: { screen: NotificationList71703Navigator },
Maps71702: { screen: Maps71702Navigator },
ArticleList71685: { screen: ArticleList71685Navigator },
ArticleList71684: { screen: ArticleList71684Navigator },
ArticleList71683: { screen: ArticleList71683Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
