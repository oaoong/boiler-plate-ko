import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  return <div>LandingPage1</div>;
}

export default LandingPage;
