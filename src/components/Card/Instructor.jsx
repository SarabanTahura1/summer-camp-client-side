const Instructor = ({ Ins }) => {
  const { fullname, email, thumbnail } = Ins || {};
  return (
    <div className=" w-full text-center lg:text-start lg:flex  items-center gap-10 dark:bg-gray-900 shadow-xl dark:shadow-white dark:shadow-xl p-4">
      <div>
        <img src={thumbnail} className="h-32 mx-auto" />
      </div>
      <div>
        <h4 className="dark:text-white">{fullname}</h4>
        <h4 className="dark:text-white text-sm">- {email}</h4>
      </div>
    </div>
  );
};
export default Instructor;
