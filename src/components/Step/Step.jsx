import React, { useContext } from "react";
import { FormContext } from "../../Home";
import {
  DataPersonal,
  RiwayatPendidikan,
  PengalamanKerja,
  Keahlian,
  Sukses,
} from "../Forms";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;

  switch (activeStepIndex) {
    case 0:
      stepContent = <DataPersonal />;
      break;
    case 1:
      stepContent = <RiwayatPendidikan />;
      break;
    case 2:
      stepContent = <PengalamanKerja />;
      break;
    case 3:
      stepContent = <Keahlian />;
      break;
    case 4:
      stepContent = <Sukses />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
