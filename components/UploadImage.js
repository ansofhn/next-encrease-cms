import { message, Upload } from "antd";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadImage = ({ setImage }) => {
  const props = {
    name: "file",
    action: "http://49.0.2.250:3002/file/upload",
    multiple: false,
    showUploadList: false,
    onChange(args) {
      const resp = args?.file?.response?.data?.filename;
      if (args.file.status !== "uploading") {
        console.log(args.file, args.fileList);
      }
      if (args.file.status === "done") {
        setImage(resp);
        message.success(`file uploaded successfully`);
      } else if (args.file.status === "error") {
        message.error(`file upload failed.`);
      }
    },
  };
  return (
    <Upload.Dragger {...props}>
      <div className="flex items-center justify-center w-full h-full font-poppins">
        <div className="flex flex-col space-y-2">
          <div className="mx-auto">
            <AiOutlineCloudUpload className="text-7xl text-softDark/40" />
          </div>
          <div className="text-base font-medium text-center text-softDark/40">
            Select Image to Upload
          </div>
          <div className="text-xs text-center text-softDark/30">
            or Drag and Drop, Copy or Paste here
          </div>
        </div>
      </div>
    </Upload.Dragger>
  );
};

export default UploadImage;
