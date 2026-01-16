"use client";

import { Steps, ConfigProvider } from "antd";

interface TimelineProps {
  // Accepts a dictionary like { "2024": "Started Project", "2025": "Growth" }
  data: Record<string, string>;
}

const HorizontalTimeline: React.FC<TimelineProps> = ({ data }) => {
  const items = Object.entries(data).map(([key, value]) => ({
    title: <span style={{ color: "#1f2937", fontWeight: "bold" }}>{key}</span>,
    description: <span style={{ color: "#6b7280" }}>{value}</span>,
  }));

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2563eb", // Blue-600 for the dots
        },
      }}
    >
      <div style={{ padding: "40px 0", width: "100%" }}>
        <Steps
          titlePlacement="vertical"
          current={items.length} // Keeps all items highlighted
          items={items}
        />

        <style jsx global>{`
          /* Thickness of the horizontal line */
          .ant-steps-item-tail::after {
            height: 6px !important; 
            background-color: #2563eb !important;
          }
          /* Style of the dots */
          .ant-steps-item-process .ant-steps-item-icon {
            background: #2563eb !important;
            border-color: #2563eb !important;
            width: 14px !important;
            height: 14px !important;
            margin-top: 8px; /* Centers dot with thicker line */
          }
          /* Remove step numbers from inside the dots */
          .ant-steps-item-icon .ant-steps-icon {
            display: none !important;
          }
        `}</style>
      </div>
    </ConfigProvider>
  );
};

export default HorizontalTimeline;
