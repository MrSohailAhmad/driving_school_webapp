import { useEffect, useState } from 'react';

import { getUsers } from '../../redux/users/users.api.js';
import SelectOption from '../Forms/SelectGroup/SelectOption.js';

const TableTwo = () => {
  const [user, setUser] = useState([]);
  const getAllUsers = async () => {
    const { data } = await getUsers();
    setUser(data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(user);
  const option = ['Approve', 'Disapprove'];

  return (
    <div className="rounded-sm w-full border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Users
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium"> Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Phone Number</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {user.map((el, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={el?.picture} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {el?.firstName} {el?.lastName}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{el?.email}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${el?.mobileNo}
            </p>
          </div>
          {/* <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{el?.sold}</p>
          </div> */}
          <div className="col-span-2 flex items-center">
            {/* <p className="text-sm text-meta-3">{el.}</p> */}
            <SelectOption
              // title=""
              label="Select option"
              option={option}
              setOption={(e) => {
                const updatedUser = user.map((item, index) =>
                  index === key
                    ? { ...item, isApproved: e === 'Approve' ? true : false }
                    : item,
                );
                setUser(updatedUser);
              }}
              onChange={(e) => console.log(e)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
