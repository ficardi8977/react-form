import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import EvolucionClinica from '../../evolucion-clinica/page';
type Props = {}

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Evolución clinica',
      children: <EvolucionClinica />,
    },
    {
      key: '2',
      label: 'Estudios complementarios',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Diagnostico',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Tratamiento y conducta',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '5',
      label: 'Seguimiento',
      children: 'Content of Tab Pane 3',
    },
  ];
  
  const onChange = (key: string) => {
    console.log(key);
  };
  
const TabNav = (props: Props) => {
  return (   
    <>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </>
  )}

export default TabNav