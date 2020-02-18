import React from "react";
import UsersList from "../components/users-list";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ayesh",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 3,
      name: "Ayesh2",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 2,
      name: "Ayesh3",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 4,
      name: "Ayesh4",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 5,
      name: "Ayesh3",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 6,
      name: "Ayesh3",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 16,
      name: "Ayesh3",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 7,
      name: "Ayesh3",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 8,
      name: "Ayesh3",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 3
    },
    {
      id: 9,
      name: "Ayesh3",
      image:
        "https://d1nabgopwop1kh.cloudfront.net/hotel-asset/1646090232599180581_wh_8",
      places: 1
    }
  ];
  return (
    <div className="container">
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
