import React, { useState } from 'react';
import { BsGrid1X2Fill, BsFillGearFill, BsPeopleFill } from 'react-icons/bs';
import { FaShoppingCart } from "react-icons/fa";
import TaskIcon from '@mui/icons-material/Task';
import { RiAdminLine } from "react-icons/ri";
import CellTowerIcon from '@mui/icons-material/CellTower';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  }

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <RiAdminLine className='icon_header' /> Admin
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li 
          className={`sidebar-list-item ${activeItem === 'Dashboard' ? 'active' : ''}`}
          onClick={() => handleItemClick('Dashboard')}
        >
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li 
          className={`sidebar-list-item ${activeItem === 'Orders' ? 'active' : ''}`}
          onClick={() => handleItemClick('Orders')}
        >
          <a href="">
            <TaskIcon className='icon' /> Orders
          </a>
        </li>
        <li 
          className={`sidebar-list-item ${activeItem === 'Products' ? 'active' : ''}`}
          onClick={() => handleItemClick('Products')}
        >
          <a href="">
            <FaShoppingCart className='icon' /> Products
          </a>
        </li>
        <li 
          className={`sidebar-list-item ${activeItem === 'Customers' ? 'active' : ''}`}
          onClick={() => handleItemClick('Customers')}
        >
          <a href="">
            <BsPeopleFill className='icon' /> Customers
          </a>
        </li>
        <li 
          className={`sidebar-list-item ${activeItem === 'Integrations' ? 'active' : ''}`}
          onClick={() => handleItemClick('Integrations')}
        >
          <a href="">
            <CellTowerIcon className='icon' /> Integrations
          </a>
        </li>
        <li 
          className={`sidebar-list-item ${activeItem === 'Reports' ? 'active' : ''}`}
          onClick={() => handleItemClick('Reports')}
        >
          <a href="">
            <TrendingUpIcon className='icon' /> Reports
          </a>
        </li>
        <li 
          className={`sidebar-list-item ${activeItem === 'Setting' ? 'active' : ''}`}
          onClick={() => handleItemClick('Setting')}
        >
          <a href="">
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
