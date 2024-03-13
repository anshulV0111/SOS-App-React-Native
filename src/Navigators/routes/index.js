import React from 'react'
import Header from '@/Components/Layouts/Header'
import CallIcon from '@/Components/UI-Kit/Icons/iconComponents/CallIcon'
import FAQIcon from '@/Components/UI-Kit/Icons/iconComponents/FAQIcon'
import HelpIcon from '@/Components/UI-Kit/Icons/iconComponents/HelpIcon'
import HomeActiveIcon from '@/Components/UI-Kit/Icons/iconComponents/HomeActiveIcon'
import HomeIcon from '@/Components/UI-Kit/Icons/iconComponents/HomeIcon'
import ForgotPasswordScreen from '@/Screens/Auth/ForgotPassword/ForgotPassword.screen'
import LoginScreen from '@/Screens/Auth/Login/Login.screen'
import ComingSoonScreen from '@/Screens/ComingSoon/ComingSoon.screen'
import ContactUsScreen from '@/Screens/ContactUs/ContactUs.screen'
import FAQScreen from '@/Screens/FAQ/FAQ.screen'
import HelpScreen from '@/Screens/Help/Help.screen'
import HomeScreen from '@/Screens/Home/Home.screen'
import { SCREEN_NAMES } from '@/Utils/constants'
import UiKitDemo from '@/Screens/UiKitDemo/UIKItDemo.screen'
import ProfileScreen from '@/Screens/Profile/Profile.screen'
import PlusActiveIcon from '@/Components/UI-Kit/Icons/iconComponents/PlusActiveIcon'
import PlusIcon from '@/Components/UI-Kit/Icons/iconComponents/PlusIcon'

export const notAuthenticatedRoutes = [
  {
    routeName: SCREEN_NAMES.login,
    component: LoginScreen
  },
  {
    routeName: SCREEN_NAMES.forgotPassword,
    component: ForgotPasswordScreen
  }
]

export const applicationTabRoutes = [
  {
    label: SCREEN_NAMES.home,
    tabLabel: 'home',
    routeName: SCREEN_NAMES.home,
    component: HomeScreen,
    activeIcon: HomeActiveIcon,
    inActiveIcon: HomeIcon,
    headerShown: true,
    header: () => <Header variant='home' />
  },
  {
    label: SCREEN_NAMES.profile,
    tabLabel: 'profile',
    routeName: SCREEN_NAMES.profile,
    component: ProfileScreen,
    activeIcon: PlusActiveIcon,
    inActiveIcon: PlusIcon,
    headerShown: true,
    header: () => <Header variant='default' headerHeading='profile' />
  }
]

export const authenticatedStackNavigationRoutes = [
  {
    label: SCREEN_NAMES.uiKit,
    headerShown: true,
    headerHeading: 'Ui kit Demo',
    header: null,
    routeName: SCREEN_NAMES.uiKit,
    component: UiKitDemo
  },
  {
    label: SCREEN_NAMES.comingSoon,
    headerShown: true,
    headerHeading: 'comingSoon',
    header: null,
    routeName: SCREEN_NAMES.comingSoon,
    component: ComingSoonScreen
  }
]

export const drawerRoutes = [
  {
    label: SCREEN_NAMES.contactUs,
    routeName: SCREEN_NAMES.contactUs,
    component: ContactUsScreen,
    drawerLabel: 'contactUs',
    optionIcon: CallIcon,
    headerShown: true,
    headerHeading: 'contactUs',
    header: null
  },
  {
    label: SCREEN_NAMES.help,
    routeName: SCREEN_NAMES.help,
    component: HelpScreen,
    drawerLabel: 'help',
    optionIcon: HelpIcon,
    headerShown: true,
    headerHeading: 'help',
    header: null
  },
  {
    label: SCREEN_NAMES.faq,
    routeName: SCREEN_NAMES.faq,
    component: FAQScreen,
    drawerLabel: 'faq',
    optionIcon: FAQIcon,
    headerShown: true,
    headerHeading: 'faq',
    header: null
  }
]
