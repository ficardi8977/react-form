import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Etiquetador from '../components/etiquetador';
type Props = {}
  
const TabNav = (props: Props) => {
  return (   
    <>
    <label>Sintomas:</label>
    <Etiquetador />
    <br></br>

    <label>Factor de riesgo:</label>
    <Etiquetador />
    </>
  )}

export default TabNav