/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import "./ContactForm.scss";
import React from "react";
import {
  Form, Input, Select, DatePicker,
} from "antd";
import NavForm from "../../../common/NavForm/NavForm";
import layout from "../../../common/NavForm/layout";

const { Option } = Select;
const { labelCol, wrapperCol } = layout;

const ContactForm = ({ values, onFinish, onFinishFailed }) => (
  <NavForm
    values={values}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username !",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password !",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      name="gender"
      label="Gender"
      rules={[
        {
          required: true,
          message: "Please select a genre !",
        },
      ]}
    >
      <Select
        placeholder="Select a genre"
        allowClear
      >
        <Option value="male">male</Option>
        <Option value="female">female</Option>
        <Option value="other">other</Option>
      </Select>
    </Form.Item>

    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      name="datePicker"
      label="DatePicker"
      rules={[
        {
          type: "object",
          required: true,
          message: "Please select time !",
        },
      ]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      name="email"
      label="E-mail"
      rules={[
        {
          type: "email",
          message: "The input is not valid E-mail!",
        },
        {
          required: true,
          message: "Please input your E-mail!",
        },
      ]}
    >
      <Input />
    </Form.Item>

  </NavForm>
);

export default ContactForm;
