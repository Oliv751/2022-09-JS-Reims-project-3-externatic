import { useParams } from "react-router-dom";
import NewConsultantForm from "../components/NewConsultantForm";
import NewCandidateForm from "../components/NewCandidateForm";

import "../styles/createAccount.scss";

export default function CreateAccount() {
  const { type } = useParams();
  return (
    <div className="createAccount">
      {type === "candidate" && <NewCandidateForm />}
      {type === "company" && <NewConsultantForm />}
    </div>
  );
}
