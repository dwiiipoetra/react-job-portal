import React, { useContext } from "react";
import { FormContext } from "../../../Home";

function Sukses() {
  const oldData = JSON.parse(localStorage.getItem("submission-form") || "[]");

  let { formData } = useContext(FormContext);
  oldData.push(formData);
  localStorage.setItem("submission-form", JSON.stringify(oldData));

  return (
    <div className="w-1/2 alert alert-success shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Data berhasil ditambahkan!</span>
      </div>
    </div>
  );
}

export default Sukses;
