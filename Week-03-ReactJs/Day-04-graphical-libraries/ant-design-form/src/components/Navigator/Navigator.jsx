import "./Navigator.scss";
import React, { useState, useEffect } from "react";
import { Steps, Button, message } from "antd";
import ContactForm from "./ContactForm/ContactForm";
import DevelopForm from "./DevelopForm/DevelopForm";

const { Step } = Steps;

const steps = [
  {
    title: "Contact",
  },
  {
    title: "Development",
  },
  {
    title: "Make an appointment",
  },
];

const Navigator = () => {
  const [formInputs, setFormInputs] = useState({ level: "Bigenner" });
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = (fieldsValue) => {
    let value;
    if (currentStep === 0) {
      value = {
        ...fieldsValue,
        datePicker: fieldsValue.datePicker?.format("YYYY-MM-DD"),
      };
    } else { value = fieldsValue; }

    setFormInputs({
      ...formInputs,
      ...value,
    });

    next();
  };

  const handleFinishFailed = (error) => {
    console.log(error);
  };

  useEffect(() => console.log(formInputs), [formInputs]);

  return (
    <div className="navigator">
      <Steps current={currentStep} size="small">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {currentStep === 0 && (
          <ContactForm
            values={formInputs}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
          />
        )}
        {currentStep === 1 && (
          <DevelopForm
            values={formInputs}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
          />
        )}
      </div>
      <div className="steps-action">
        {currentStep === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete !")}>
            Done
          </Button>
        )}
        {currentStep > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navigator;
