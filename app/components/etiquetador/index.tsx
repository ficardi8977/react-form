import React from 'react';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';

type TagRender = SelectProps['tagRender'];

const options: SelectProps['options'] = [
  { value: 'Hipertension', color: 'blue'},
  { value: 'Dolor pecho' ,color: 'blue'},
  { value: 'Arritmia', color: 'blue'}
];

const Etiquetador: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={'blue'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  )
};

const App: React.FC = () => (
  <Select
    mode="multiple"
    tagRender={Etiquetador}
    style={{ width: '100%' }}
    options={options}
  />
);

export default App;