import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>User Details</h2>
      <p>Showing details for user ID: <b>{id}</b></p>
    </div>
  );
}
