import { useParams } from "react-router-dom";
import Header from "../components/Header";
import NewConsultantForm from "../components/NewConsultantForm";
import NewCandidateForm from "../components/NewCandidateForm";

import "../styles/createAccount.scss";

export default function CreateAccount() {
  const { type } = useParams();
  return (
    <div className="createAccount">
      <Header />
      {type === "candidate" && <NewCandidateForm />}
      {type === "consultant" && <NewConsultantForm />}
    </div>
  );
}
