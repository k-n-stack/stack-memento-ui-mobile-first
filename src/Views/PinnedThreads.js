import React, { useEffect } from "react";

import { setUserPinnedThreads } from "Store/Features/userSlice";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

const PinnedThreads = () => {

  const dispatch = useDispatch();
  const pinnedThreads = useSelector((state) => (state.user.pinnedThreads));

  useEffect(() => {
    dispatch(setUserPinnedThreads());
  }, []);

  return (
    <>
      <div>PinnedThreads page</div>
      <div>
        {
          pinnedThreads.map(() => {
            return <div>get</div>;
          })
        }
      </div>
    </>
  );
};

export default PinnedThreads;