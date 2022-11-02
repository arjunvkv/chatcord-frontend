import React, { useEffect, useState } from "react";
const Home = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [errMsg, setErrMsg] = useState({
    username: "",
    room: "",
  });

  const validation = async () => {
    let isPassed = true;
    setErrMsg({
      username: "",
      room: "",
    });
    if (!username) {
      setErrMsg((prev) => ({ ...prev, username: "Please provide a username" }));
      isPassed = false;
    }
    if (!room) {
      setErrMsg((prev) => ({ ...prev, room: "Please select a room" }));
      isPassed = false;
    }
    return isPassed;
  };
  const handleSubmit = async () => {
    if (await validation()) {
      console.log(username, room);
      localStorage.setItem("username", username);
      localStorage.setItem("room", room);
      window.location.href = "/chat";
    }
  };
  // useEffect(() => {
  //   console.log("🚀 ~ file: Home.js ~ line 43 ~ Home ~ errMsg", errMsg);
  // }, [errMsg]);

  return (
    <div className="flex h-screen w-full justify-center bg-gray-600 text-white">
      <div className="m-4 h-fit w-full rounded-lg bg-gray-800 lg:w-7/12 ">
        <div className="grid h-14 place-content-center rounded-tl-lg rounded-tr-lg border-2 border-gray-800 bg-gray-700">
          Discord Demo
        </div>
        <div className="flex w-full flex-col justify-center space-y-1 py-4 px-4 md:px-32 md:py-20">
          <div className="w-full pb-5">
            <h1 className="mb-2 block text-sm font-medium ">Username</h1>
            <input
              id="username"
              className="w-full rounded-xl py-2 px-3 text-sm text-gray-500 placeholder:text-sm placeholder:text-gray-500 focus:outline-none"
              placeholder="John Doe"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <p className="text-sm  text-red-300">{errMsg?.username}</p>
          </div>
          <div className="">
            <label className="mb-2 block text-sm font-medium ">Room</label>
            <select
              id="room"
              name="room"
              className="block w-full rounded-xl border px-3 py-2 text-sm text-gray-500 focus:outline-none "
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            >
              <option value="">select your room</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Java">Java</option>
            </select>
            <p className="text-sm  text-red-300">{errMsg?.room}</p>
          </div>

          <div className="w-full py-6 text-center">
            <button
              id="formbutton"
              type="submit"
              className=" whitespace-nowrap rounded-xl bg-gray-700 p-2 px-6 drop-shadow-sm"
              onClick={handleSubmit}
            >
              Join Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
