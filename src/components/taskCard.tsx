interface TaskDetails {
  taskName: string;
  handleDelete: () => void
}

const TaskCard = ({ taskName , handleDelete }: TaskDetails) => {
  return (
    <div className="flex justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="hover:bg-gray-100  dark:hover:bg-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {taskName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div onClick={handleDelete} className="cursor-pointer hover:bg-gray-100 top-0 right-0 dark:hover:bg-gray-700 p-3 text-red-700">
        Delete
      </div>
    </div>
  );
};

export default TaskCard;
