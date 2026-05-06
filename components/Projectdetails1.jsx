import React from "react";

const Projectdetails1 = () => {
  return (
    <div>
      {/* Section - Parallax Divider Start */}
      <div className="mxd-section">
        <div className="mxd-container">
          <div className="mxd-divider loading__fade">
            {/* ShikshaFlow ERP Parallax Image */}
            <div className="mxd-divider__image prj-details-img-01 parallax-img">
              <div className="shikshaflow-overlay">
                <h2 className="shikshaflow-title">ShikshaFlow ERP System</h2>

                <p className="shikshaflow-description">
                  Complete management solution for institutions with WhatsApp
                  chatbot integration for parents, student records, marks,
                  attendance, transport, exams, subjects, notifications and
                  school management automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider End */}
    </div>
  );
};

export default Projectdetails1;
