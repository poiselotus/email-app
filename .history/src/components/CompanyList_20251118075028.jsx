import React from "react";
import ap
import { FiEdit, FiTrash2 } from "react-icons/fi";

function CompanyList() {
  return (
    <div className="company-list">
      <div className="company-header">
        <h2>Companies</h2>
        <button className="new-company-btn">+ New Company</button>
      </div>

      <div className="company-item">
        <p>Microsoft</p>
        <div className="actions">
          <FiEdit className="edit" />
          <FiTrash2 className="delete" />
        </div>
      </div>

      <div className="company-item">
        <p>Google</p>
        <div className="actions">
          <FiEdit className="edit" />
          <FiTrash2 className="delete" />
        </div>
      </div>

      <div className="company-item">
        <p>Amazon</p>
        <div className="actions">
          <FiEdit className="edit" />
          <FiTrash2 className="delete" />
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
