import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) {
        navigate("/"); 
      } else {
        setUser(firebaseUser);
      }
    });

    return () => unsub();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="p-6 mt-18">
      <h1 className="text-xl font-bold mb-4">Welcome Admin</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>
  );
};

export default Dashboard;
