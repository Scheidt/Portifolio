"use client";

import Button from "antd/es/button";
import ConfigProvider from "antd/es/config-provider";
import Form from "antd/es/form";
import Input from "antd/es/input";
import message from "antd/es/message";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Types
const { TextArea } = Input;
interface ContactTexts {
  formSubmitted: string;
  successMessage: string;
  leftTitle: string;
  leftIntro: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  rightTitle: string;
  labelName: string;
  validationNameRequired: string;
  placeholderName: string;
  labelEmail: string;
  validationEmailRequired: string;
  validationEmailInvalid: string;
  placeholderEmail: string;
  labelSubject: string;
  placeholderSubject: string;
  labelMessage: string;
  validationMessageRequired: string;
  placeholderMessage: string;
  sendButton: string;
}

interface ContactFormValues {
  name: string;
  email: string;
  subject?: string; // Optional field
  message: string;
}

const ContactPageContent = ({ TEXTS }: { TEXTS: ContactTexts }) => {
  const [form] = Form.useForm();

  const onFinish = (values: ContactFormValues) => {
    console.log(TEXTS.formSubmitted, values);
    message.success(TEXTS.successMessage);
    form.resetFields();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left part: contact information*/}
          <div className="bg-blue-600 w-full md:w-1/3 p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">{TEXTS.leftTitle}</h2>
            <p className="text-blue-100 mb-8">{TEXTS.leftIntro}</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <span>{TEXTS.contactEmail}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <span>{TEXTS.contactPhone}</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span>{TEXTS.contactAddress}</span>
              </div>
            </div>
          </div>

          {/* Right Part: Form Fields */}
          <div className="w-full md:w-2/3 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {TEXTS.rightTitle}
            </h3>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#2563eb",
                  borderRadius: 6,
                },
              }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                requiredMark={false}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <Form.Item
                    label={
                      <span className="font-medium text-gray-700">
                        {TEXTS.labelName}
                      </span>
                    }
                    name="name"
                    rules={[
                      { required: true, message: TEXTS.validationNameRequired },
                    ]}
                  >
                    <Input
                      placeholder={TEXTS.placeholderName}
                      size="large"
                      className="py-2"
                    />
                  </Form.Item>

                  {/* Email Field */}
                  <Form.Item
                    label={
                      <span className="font-medium text-gray-700">
                        {TEXTS.labelEmail}
                      </span>
                    }
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: TEXTS.validationEmailRequired,
                      },
                      { type: "email", message: TEXTS.validationEmailInvalid },
                    ]}
                  >
                    <Input
                      placeholder={TEXTS.placeholderEmail}
                      size="large"
                      className="py-2"
                    />
                  </Form.Item>
                </div>

                {/* Subject Field (Optional) */}
                <Form.Item
                  label={
                    <span className="font-medium text-gray-700">
                      {TEXTS.labelSubject}
                    </span>
                  }
                  name="subject"
                >
                  <Input
                    placeholder={TEXTS.placeholderSubject}
                    size="large"
                    className="py-2"
                  />
                </Form.Item>

                {/* Message Field */}
                <Form.Item
                  label={
                    <span className="font-medium text-gray-700">
                      {TEXTS.labelMessage}
                    </span>
                  }
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: TEXTS.validationMessageRequired,
                    },
                  ]}
                >
                  <TextArea rows={4} placeholder={TEXTS.placeholderMessage} />
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<Send size={18} />}
                    className="w-full sm:w-auto h-12 px-8 flex items-center justify-center"
                  >
                    {TEXTS.sendButton}
                  </Button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const { translations } = useLanguage();
  return <ContactPageContent TEXTS={translations.contact} />;
};

export default ContactPage;
