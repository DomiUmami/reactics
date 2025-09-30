import React, { useEffect, useState } from "react";

function GithubProfile({ username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) return <p>Loading profile...</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div className="github-profile">
      <img className="profile-picture"
        src={profile.avatar_url}
        alt={profile.name || profile.login}
        width="120"
        style={{ borderRadius: "50%" }}
      />
      <h2>{profile.name || profile.login}</h2>
      {profile.bio && <p>{profile.bio}</p>}
    </div>
  );
}

export default GithubProfile;
