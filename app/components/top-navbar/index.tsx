'use client';
import React, { useState } from 'react';
import { CalculatorOutlined, FormOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Calculadora from '@/app/calculadora-riesgos/page';
import TabNav from '../tab-navegacion';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Historia clinica',
    key: 'historiaClinica',
    icon: <FormOutlined />,
  },
  {
    label: 'Calculadora de riesgos',
    key: 'calculadora',
    icon: <CalculatorOutlined />,
  },
];


const TopNav = () => {
  const [current, setCurrent] = useState('historiaClinica');
  const [showFormCalculadora, setShowFormCalculadora] = useState(false);
  const [showFormHistoria, setShowFormHistoria] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);

     if (e.key === 'calculadora') {
      setShowFormCalculadora(true);
    } else {
      setShowFormCalculadora(false);
    }

    if (e.key === 'historiaClinica') {
      setShowFormHistoria(true);
    } else {
      setShowFormHistoria(false);
    }
  };

return(
  <>
  <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  {showFormCalculadora && (<Calculadora/>)}
  {showFormHistoria && (<TabNav/>)}
  </>
)}

export default TopNav;