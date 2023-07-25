import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function GetFeedback({ open, handleClose, message }) {
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
            <form>
              {" "}
              <div className="space-y-4 w-full">
                <input
                  type="text"
                  readOnly
                  defaultValue={message?.class_Name}
                  className="bg-gray-200 focus:outline-none p-4 w-full rounded-md block"
                />
                <input
                  type="text"
                  readOnly
                  defaultValue={message?.titileMessage}
                  className="bg-gray-200 focus:outline-none p-4 w-full rounded-md block"
                />
                <textarea
                  type="text"
                  readOnly
                  defaultValue={message?.messageDescription}
                  className="bg-gray-200 focus:outline-none p-4 h-40 w-full rounded-md block"
                />
              </div>
              <div className="modal-action">
                <button
                  onClick={handleClose}
                  type="submit"
                  className="w-full btn bg-gray-900 hover:bg-gray-900   py-4 block text-center cursor-pointer rounded-md font-semibold uppercase text-white"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
