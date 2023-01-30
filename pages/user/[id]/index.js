import { message, Select } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { mutate } from "swr";
import { appConfig } from "../../../config/app";
import CMSLayout from "../../../layouts/CMSLayout";
import { userRepository } from "../../../repository/user";

const SuperAgent = require("superagent");
const { Option } = Select;

const FormUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const [roleId, setRoleId] = useState();

  const { data: dataDetailUser } = userRepository.hooks.getDetailUser(id);

  const [mode, setMode] = useState("create");

  // Form Control
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    dataDetailUser ? setMode("edit") : setMode("create");
  }, [dataDetailUser]);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const oldData = dataDetailUser?.data;
    try {
      if (mode === "create") {
        const data = {
          fullname: fullNameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          password: passwordRef.current.value,
          roleId: roleId,
        };
        await SuperAgent.post(appConfig.apiUrl + "/auth/register")
          .send(data)
          .then((res) => console.log(res));
        await mutate(userRepository.url.user());
      } else {
        const data = {
          fullname: fullNameRef.current.value
            ? fullNameRef.current.value
            : oldData.fullname,
          email: emailRef.current.value
            ? emailRef.current.value
            : oldData.email,
          phone: phoneRef.current.value
            ? phoneRef.current.value
            : oldData.phone,
        };
        await SuperAgent.put(appConfig.apiUrl + `/users/${id}`)
          .send(data)
          .then((res) => console.log(res));
        await mutate(userRepository.url.user());
      }
      message
        .success(
          `Successfully ${mode === "create" ? "Created" : "Updated"} User`
        )
        .then(router.push("/user"));
    } catch (e) {
      message.error("Failed to Create User");
      console.log(e.message);
    }
  };

  return (
    <div className="p-10 mx-8 bg-gray-100 mt-36">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-background/80">
            {`${id === "create" ? "Create" : "Edit"} User`}
          </div>
          <button
            onClick={() => router.back()}
            className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
          >
            Back
          </button>
        </div>
        <hr className="border-gray-200" />
        <div className="bg-white/80 p-14">
          <form onSubmit={onSubmitForm}>
            <label className="text-sm font-medium text-gray-500">
              Fullname
            </label>
            <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
              <input
                ref={fullNameRef}
                defaultValue={dataDetailUser?.data?.fullname}
                type="text"
                required
                className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
              />
            </div>
            <label className="text-sm font-medium text-gray-500">Email</label>
            <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
              <input
                ref={emailRef}
                defaultValue={dataDetailUser?.data?.email}
                type="email"
                required
                className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
              />
            </div>
            <label className="text-sm font-medium text-gray-500">Phone</label>
            <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
              <input
                ref={phoneRef}
                defaultValue={dataDetailUser?.data?.phone}
                type="number"
                required
                className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
              />
            </div>
            {mode !== "edit" && (
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Password
                </label>
                <div className="w-full px-4 py-2.5 mb-5 bg-gray-100 rounded-md">
                  <input
                    ref={passwordRef}
                    type="password"
                    required
                    className="w-full text-xs bg-transparent text-background/80 focus:outline-none"
                  />
                </div>
                <label className="text-sm font-medium text-gray-500">
                  Role
                </label>
                <div>
                  <Select
                    className="mb-2 text-xs border rounded-md border-textColor hover:border-textColor"
                    placeholder={`${
                      dataDetailUser
                        ? dataDetailUser?.data?.role?.name
                        : "Choose Role"
                    }`}
                    onSelect={(value) => {
                      setRoleId(value);
                    }}
                    style={{
                      width: 500,
                    }}
                    bordered={false}
                  >
                    <Option
                      className="text-xs hover:bg-softGray hover:text-background/80 focus:bg-softGray focus:text-background/80"
                      value="6a3fa3d2-3051-46d0-95bf-e13cc522964f"
                    >
                      Admin
                    </Option>
                    <Option
                      className="hover:bg-softGray hover:text-background/80 focus:bg-softGray focus:text-background/80"
                      value="0171eae9-0968-4ce1-9145-b607a0e1882a"
                    >
                      User
                    </Option>
                  </Select>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end mt-10">
              <button
                type="submit"
                className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
              >
                {`${id === "create" ? "Add New User" : "Save Change"}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUser;

FormUser.getLayout = (page) => <CMSLayout children={page} />;
