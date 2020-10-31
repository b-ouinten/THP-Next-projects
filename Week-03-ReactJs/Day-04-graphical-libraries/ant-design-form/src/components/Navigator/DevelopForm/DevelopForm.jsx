import "./DevelopForm.scss";
import React from "react";
import {
  Form, Select,
} from "antd";
import NavForm from "../../../common/NavForm/NavForm";
import layout from "../../../common/NavForm/layout";

const { Option } = Select;
const { labelCol, wrapperCol } = layout;

// eslint-disable-next-line react/prop-types
const DevelopForm = ({ values, onFinish, onFinishFailed }) => (
  <NavForm
    values={values}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      name="level"
      label="Level"
    >
      <Select>
        <Option value="beginner">Beginner</Option>
        <Option value="intermediate">Intermediate</Option>
        <Option value="experimented">Experimented</Option>
      </Select>
    </Form.Item>

  </NavForm>
);

export default DevelopForm;
