import React, { useState, createContext } from "react";
import Step from "./components/Step/Step";
import Stepper from "./components/Stepper";
import Navbar from "./components/Navbar";
import SubmissionList from "./components/Submission/SubmissionList";
export const FormContext = createContext();

function Home() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [isShow, setIsShow] = useState(false);

  // get item
  const submissionItem = localStorage.getItem("submission-form");
  const parsedSubmissionItem = JSON.parse(submissionItem);

  const toggle = (e) => {
    setIsShow((state) => !state);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Navbar />

      {/* Submission List */}
      <div className="container flex justify-around px-24 mx-auto bg-white">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Email</th>
                <th>Pendidikan</th>
                <th>Pengalaman Kerja</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {parsedSubmissionItem && parsedSubmissionItem !== "null" ? (
                <SubmissionList datas={parsedSubmissionItem} />
              ) : (
                <tr className="text-center">
                  <td colSpan="7">Tidak Ada Data Ditemukan</td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={toggle} className="my-4 btn btn-primary">
            Tambah Data
          </button>
        </div>
      </div>

      {/* Submission Form */}
      {isShow && (
        <FormContext.Provider
          value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
        >
          <div className="h-screen flex flex-col items-center justify-start">
            <Stepper />
            <Step />
          </div>
        </FormContext.Provider>
      )}
    </>
  );
}

export default Home;
