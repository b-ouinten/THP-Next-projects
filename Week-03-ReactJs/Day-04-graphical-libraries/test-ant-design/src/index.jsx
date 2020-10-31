import React from 'react';
import ReactDOM from "react-dom";
import { Cascader } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const App = () => {
  const options = [
    {
      value: "thp",
      label: "THP",
      children: [
        {
          value: "ruby",
          label: "Ruby",
          children: [
            {
              value: "rails",
              label: "Rails",
            },
          ],
        },
        {
          value: "javascript",
          label: "Javascript",
          children: [
            {
              value: "jquery",
              label: "JQuery"
            },
            {
              value: "ajax",
              label: "AJAX"
            }
          ]
        }
      ],
    },
    {
      value: "javascript",
      label: "JS",
      children: [
        {
          value: "react",
          label: "React",
          children: [
            {
              value: "functionnal",
              label: "Functional Component",
            },
          ],
        },
      ],
    },
  ];

  const onChange = (value) => {
    console.log(value)
  }

  return (
    <>
      <Cascader 
        options={options}
        onChange={onChange}
        placeholde='Please select'
      />
      <TwitterOutlined style={{ fontSize: '16px', color: '#08c' }} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
