import { keyDownHandler } from "../../services/utils/keyDown.js";
import { _formModal } from "./_formModal.js";
import { _mainSection } from "./_photographerMain.js";

export const pageBuilder = (MediasData, phData) => {
  //page part main
  _mainSection(MediasData, phData)

  _formModal();

  document.addEventListener("keydown", keyDownHandler);
};

