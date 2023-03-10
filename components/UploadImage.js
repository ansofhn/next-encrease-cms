import { message, Upload } from "antd";
import React, { useState } from "react";
import { AiOutlineCloudUpload, AiOutlineDelete } from "react-icons/ai";

const UploadImage = ({ setImage }) => {

  const props = {
    name: "file",
    action: "http://49.0.2.250:3002/file/upload",
    multiple: false,
    listType: "picture",
    accept: ".png,.jpg,.jpeg",
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: (
        <AiOutlineDelete
          onClick={(e) => console.log(e, "custom removeIcon event")}
        />
      ),
    },
    maxCount: 5,
    onChange(args) {
      const resp = args?.fileList
      if (args.file.status !== "uploading") {
        console.log(args.file, args.fileList);
      }
      if (args.file.status === "done") {
        setImage(resp)
        message.success(`file uploaded successfully`);
      } else if (args.file.status === "error") {
        message.error(`file upload failed.`);
      }
    },
  };
  return (
    <Upload.Dragger {...props}>
      <div className="flex items-center justify-center font-poppins">
        <div className="flex flex-col space-y-2">
          <div className="mx-auto">
            <AiOutlineCloudUpload className="text-7xl text-softDark/40" />
          </div>
          <div className="text-base font-medium text-center text-softDark/40">
            Select Image to Upload
          </div>
          <div className=" text-[10px] lg:text-xs text-center text-softDark/30">
            or Drag and Drop, Copy or Paste here
          </div>
        </div>
      </div>
    </Upload.Dragger>
  );
};

export default UploadImage;
