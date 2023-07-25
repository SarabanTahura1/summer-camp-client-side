

const FeedbackMessage = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 w-full px-5">
      <form
      >
        {" "}
        <div className="space-y-4 w-full">
          <input
            type="text"
            // ref={titleRef}
            name="title"
            readOnly
            // defaultValue={classData?.class_name}
            className="bg-gray-200 focus:outline-none p-4 w-full rounded-md block"
          />
          <input
            type="text"
            name="feedTitle"
            // // ref={feedTitleRef}
            placeholder="Enter feedback Title"
            className="bg-gray-200 focus:outline-none p-4 w-full rounded-md block"
          />
          <textarea
            type="text"
            name="feedMessage"
            placeholder="Message"
            // // ref={FeedMessageRef}
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
  );
};

export default FeedbackMessage;
