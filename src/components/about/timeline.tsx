"use client";

import React from "react";
import { Steps, ConfigProvider, theme } from "antd";
import { colors } from "@/colors";

interface TimelineProps {
  // Accepts a dictionary like { "2024": "Started Project", "2025": "Growth" }
  data: Record<string, string>;
}

const HorizontalTimeline: React.FC<TimelineProps> = ({ data }) => {
  // Convert the dictionary into the format Ant Design Steps expects
  const items = Object.entries(data).map(([key, value]) => ({
    title: <span style={{ color: colors.gray[800], fontWeight: "bold" }}>{key}</span>,
    description: (
      <span style={{ color: colors.gray[500] }}>{value}</span>
    ),
  }));

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary.blue, // Blue-600 for the dots
        },
      }}
    >
      <div style={{ padding: "40px 0", width: "100%" }}>
        <Steps
          labelPlacement="vertical"
          current={items.length} // Keeps all items highlighted
          items={items}
        />

        <style jsx global>{`
          /* Thickness of the horizontal line */
          .ant-steps-item-tail::after {
            height: 6px !important; 
            background-color: ${colors.primary.blue} !important;
          }
          /* Style of the dots */
          .ant-steps-item-process .ant-steps-item-icon {
            background: ${colors.primary.blue} !important;
            border-color: ${colors.primary.blue} !important;
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
