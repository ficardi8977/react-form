'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Divider, Form, Input, Switch } from 'antd';

type FieldType = {
  sexo?: string;
  edad?: (value: string) => number;
  presionSanguinea?: number;
  tratamientoHipertension?: string;
  fumador?:boolean;
  diabetico?:boolean;
  hdl?:number;
  colesterol?:number;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Calculadora: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

<Divider>Calculadora de score de riesgos</Divider>
    <Form.Item<FieldType>
      label="Sexo"
      name="sexo"
      rules={[{ required: true, message: 'Please input your eso!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Edad"
      name="edad"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Presion Sanguinea"
      name="presionSanguinea"
      rules={[{ required: true, message: 'Please input your Sanguinea!' }]}
    >
    <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Fumador"
      name="fumador"
      rules={[{ required: true, message: 'Please input your Sanguinea!' }]}
    >
    <Switch />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Calcular
      </Button>
    </Form.Item>
  </Form>

);

export default Calculadora;