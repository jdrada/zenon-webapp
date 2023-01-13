import Logo from "../assets/workout-logo.svg";

interface IGoalProps {
  name: string;
  description: string;
  milestones: string;
  totalMilestones: string;
  activities: string;
  totalActivities: string;
  goalDate: string;
}

const GoalCard = (goal: IGoalProps) => {
  return (
    <>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex">
          <img className="flex-none w-20 " src={Logo} />
          <div id="Goal Name & Description" className="grow content-between">
            <div className="ml-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {goal.name}
            </div>
            <div className="ml-2 font-normal text-gray-700 dark:text-gray-400">
              {goal.description}
            </div>
          </div>
          <div className="flex-none w-4">
            <input type={"checkbox"}></input>
          </div>
        </div>
        <div className="flex h-10 mt-6">
          <div className="flex-none w-20font-normal text-gray-700 dark:text-gray-400">
            Hitos: {goal.milestones}/{goal.totalMilestones}
          </div>
          <div className="grow ml-2 font-normal text-gray-700 dark:text-gray-400">
            Actividades: {goal.activities}/{goal.totalActivities}
          </div>
          <div className="flex-none w-20 font-normal text-gray-700 dark:text-gray-400">
            {goal.goalDate}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalCard;
