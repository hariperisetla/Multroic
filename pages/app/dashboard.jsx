import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/UserContext";
import axios from "axios";
import RepoCard from "@/components/dashboard/RepoCard";

const Dashboard = () => {
  const { currentUser, getGithubToken, logout } = useAuth();

  const [repos, setRepos] = useState();

  const handleRepos = async () => {
    if (currentUser) {
      const response = await getGithubToken();
      if (response != null) setRepos(response.data);
      else {
        console.log(response);
      }
    }
  };

  const handleSignOut = () => {
    logout();
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     if (currentUser) {
  //       console.log(currentUser);
  //     }
  //   }
  //   fetchData();
  // }, [currentUser]);

  return (
    <div className="flex flex-col text-center">
      <div>
        <button className="bg-slate-700" onClick={handleSignOut}>
          Sign Out
        </button>
        <h1></h1>
        dashboard{" "}
        <button className="bg-slate-700" onClick={handleRepos}>
          Fetch Repos
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto text-left">
        {repos && repos.map((repo, id) => <RepoCard repo={repo} key={id} />)}
      </div>
    </div>
  );
};

Dashboard.layout = "DashboardL";

export default Dashboard;
