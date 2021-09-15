import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from "react-icons/fi";

export const Sidebar = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'STATUS',
    path: '/status',
    icon:<FiIcons.FiActivity/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'INTERNAL ACC (NEW)',
        path: '/status',
        cName: 'sub-nav',
      },{
        title: 'EXTERNAL ACC (NEW)',
        path: '/external-status',
        cName: 'sub-nav',
      },
      {
        title: 'EXISTING PROGRAMME',
        path: '/existing-status',
        cName: 'sub-nav'
      },
      
    ]
  },{
    title: 'PROGRAMMES',
    path: '/programme',
    icon:<FiIcons.FiActivity/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'NEW PROGRAMME',
        path: '/newform',
        cName: 'sub-nav',
    },{
      title: 'EXISTING PROGRAMME',
      path: '/programme',
      cName: 'sub-nav',
  }
  ]
  },{
    title: 'PROGRAMME REQUIREMENT',
    path: '/ugreq',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav : [
      {
        title: 'UNIVERSITY',
        path: '/ugreq',
        cName: 'sub-nav',
       
      },{
        title: 'NCTE REQUIREMENT',
        path: '/nctereq',
        cName: 'sub-nav'
      },{
        title: 'NAB REQUIREMENT',
        path: '/nabreq',
        cName: 'sub-nav',
      },{
        title: 'EXISTING PROGRAMME (NAB)',
        path: '/existingreq',
        cName: 'sub-nav',
      },
    ]
  },
];