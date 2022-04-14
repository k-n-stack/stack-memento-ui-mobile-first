import React from "react";

const GroupsSub = () => {

  const subscribedGroups = useSelector((state) => (state.user.subscribedGroups));
  const ownGroups = useSelector((state) => (state.user.ownGroups));

  const getGroups = (groups) => {
    if (groups.length === 0) {
      return <div>No groups !!!</div>
    }

    return groups.map(function (group) {
      return <div>{group}</div>
    });
  }

  return (
    <div className="group-sub">group</div>
  );
};

export default GroupsSub;