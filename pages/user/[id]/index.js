import { Button, Form, Input, Select } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { userRepository } from "../../../repository/user";

const FormUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form] = Form.useForm();

  const { data: dataUser } = userRepository.hooks.getUser();
  const { data: dataDetailUser } = userRepository.hooks.getDetailUser(id);

  const [mode, setMode] = useState("create");

  const onFinish = async (value) => {};

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
        <div className="p-10 bg-softWhite">
          <Form form={form} autoComplete="off" onFinish={onFinish}>
            <Form.Item name={"fullname"} rules={[{ required: true }]}>
              <label className="text-xs font-medium text-gray-500">
                Fullname
              </label>
              <div className="w-full px-3 py-2.5 bg-gray-100 rounded-md xl:px-4 xl:py-2">
                <input
                  type="text"
                  required
                  className="w-full text-sm bg-transparent text-background/80 focus:outline-none"
                />
              </div>
            </Form.Item>
            <Form.Item name={"email"} rules={[{ required: true }]}>
              <label className="text-xs font-medium text-gray-500">Email</label>
              <div className="w-full px-3 py-2.5 bg-gray-100 rounded-md xl:px-4 xl:py-2">
                <input
                  type="email"
                  required
                  className="w-full text-sm bg-transparent text-background/80 focus:outline-none"
                />
              </div>
            </Form.Item>
            <Form.Item name={"phone"} rules={[{ required: true }]}>
              <label className="text-xs font-medium text-gray-500">Phone</label>
              <div className="w-full px-3 py-2.5 bg-gray-100 rounded-md xl:px-4 xl:py-2">
                <input
                  type="number"
                  required
                  className="w-full text-sm bg-transparent text-background/80 focus:outline-none"
                />
              </div>
            </Form.Item>
            <Form.Item name={"password"} rules={[{ required: true }]}>
              <label className="text-xs font-medium text-gray-500">
                Password
              </label>
              <div className="w-full px-3 py-2.5 bg-gray-100 rounded-md xl:px-4 xl:py-2">
                <input
                  type="password"
                  required
                  className="w-full text-sm bg-transparent text-background/80 focus:outline-none"
                />
              </div>
            </Form.Item>
            <Form.Item name={"roleId"} rules={[{ required: true }]}>
              <label className="text-xs font-medium text-gray-500">Role</label>
              <div className="w-full px-3 py-2.5 bg-gray-100 rounded-md xl:px-4 xl:py-2">
                <Select placeholder="Select Role">
                  <Select.Option value={"6a3fa3d2-3051-46d0-95bf-e13cc522964f"}>
                    Admin
                  </Select.Option>
                  <Select.Option value={"0171eae9-0968-4ce1-9145-b607a0e1882a"}>
                    User
                  </Select.Option>
                </Select>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="flex items-center justify-end mt-5">
                <button
                  type="submit"
                  className="px-4 py-2.5 text-sm font-medium rounded-sm bg-background text-softWhite"
                >
                  {`${id === "create" ? "Add New User" : "Save Change"}`}
                </button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormUser;
