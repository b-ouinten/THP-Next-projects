/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import "./NavForm.scss";
import React from "react";

import {
  Form, Button,
} from "antd";

const NavForm = ({
  values, onFinish, onFinishFailed, children,
}) => {
  const handleFinish = (fieldsValue) => {
    onFinish(fieldsValue);
  };

  const handleFinishFailed = (errorInfo) => {
    onFinishFailed(errorInfo);
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      initialValues={values}
      form={form}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      {children}

      <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NavForm;
