import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function MessageModal({ open, handleClose, className, id }) {
  const classname = useRef();
  const messageTitile = useRef();
  const message = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const uid = id;
    const class_Name = classname.current.value;
    const titileMessage = messageTitile.current.value;
    const messageDescription = message.current.value;
    axios
      .post("https://language-server.up.railway.app/message", {
        uid,
        class_Name,
        messageDescription,
        titileMessage,
      })
      .then((response) => {
        handleClose();
        if (response.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Feedback Send!",
            showConfirmButton: false,
            timer: 2000,
          });
        } else if (response.data.error) {
          handleClose();
          Swal.fire({
            icon: "warning",
            title: "Sorry!",
            text: response.data.message,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="max-w-2xl mx-auto my-10 py-5 w-full px-5 bg-white">
          <div>
            <form onSubmit={sendMessage}>
              {" "}
              <div className="space-y-4 w-full">
                <input
                  type="text"
                  ref={classname}
                  name="title"
                  readOnly
                  defaultValue={className}
                  className="bg-gray-200 focus:outline-none p-4 w-full rounded-md block"
                />
                <input
                  type="text"
                  name="feedTitle"
                  required
                  ref={messageTitile}
                  placeholder="Enter feedback Title"
                  className="bg-gray-200 focus:outline-none p-4 w-full rounded-md block"
                />
                <textarea
                  type="text"
                  name="feedMessage"
                  placeholder="Message"
                  ref={message}
                  required
                  className="bg-gray-200 focus:outline-none p-4 h-40 w-full rounded-md block"
                />
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="w-full btn bg-gray-900 hover:bg-gray-900   py-4 block text-center cursor-pointer rounded-md font-semibold uppercase text-white"
                >
                  Send FeedBack
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
