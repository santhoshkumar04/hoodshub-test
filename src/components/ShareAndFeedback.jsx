import React from "react";
import StepHeader from "./StepHeader";

const socialNetworks = [
  { label: "facebook", icon: "./images/facebook_icon.png" },
  { label: "facebook", icon: "./images/instagram-icon.png" },
  { label: "facebook", icon: "./images/linkedin_icon.png" },
  { label: "facebook", icon: "./images/reddit_icon.png" },
  { label: "facebook", icon: "./images/x_icon.png" },
];

const integrations = [
  { label: "saleforce", icon: "./images/integrations/salesforce_icon.png" },
  { label: "hubspot", icon: "./images/integrations/hubspot_icon.png" },
  { label: "edge", icon: "./images/integrations/edge_icon.png" },
  { label: "microsoft", icon: "./images/integrations/microsoft_icon.png" },
  { label: "sap", icon: "./images/integrations/sap_icon.png" },
];

export default function ShareAndFeedback() {
  return (
    <StepHeader title="Step 5: Share your feedback">
      <div className="bg-primary/10 grid grid-cols-2 gap-4 h-full items-center rounded-xl p-10">
        <div className="lg:col-span-1 col-span-2 space-y-4">
          <h3 className="font-medium text-textBase">Integrations</h3>
          <div className="flex flex-wrap items-center gap-4">
            {integrations.map((item, i) => (
              <span key={i} className="h-14 w-14 p-3 bg-white rounded-lg">
                <img alt={item.label} src={item.icon} />
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 space-y-4">
          <h3 className="font-medium text-textBase">Social Sites</h3>
          <div className="flex flex-wrap items-center gap-4">
            {socialNetworks.map((item, i) => (
              <span key={i} className="h-14 w-14 p-3 bg-white rounded-lg">
                <img alt={item.label} src={item.icon} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </StepHeader>
  );
}
