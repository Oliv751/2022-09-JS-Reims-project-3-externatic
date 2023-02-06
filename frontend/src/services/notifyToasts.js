import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyAdd = () =>
  toast("Votre expérience a bien été ajoutée !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notifyEdit = () =>
  toast("Votre expérience a bien été modifiée !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notifyDelete = () =>
  toast("Votre expérience a bien été supprimée !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notifyModif = () =>
  toast("Modifications enregistrées !", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export { notifyDelete, notifyAdd, notifyEdit, notifyModif };
