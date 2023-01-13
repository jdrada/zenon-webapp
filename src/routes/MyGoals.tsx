import React from "react";
import GoalCard from "../components/GoalCard";

const MyGoals = () => {
  const dummyGoal = [
    {
      goalName: "Goal Name",
      goalDescription: "Goal Description",
      milestones: "1",
      totalMilestones: "6",
      activities: "0",
      totalActivities: "10",
      goalDate: "1/10/2023",
    },
    {
      goalName: "Goal Name 2",
      goalDescription: "Goal Description 2",
      milestones: "2",
      totalMilestones: "3",
      activities: "1",
      totalActivities: "8",
      goalDate: "12/10/2023",
    },
  ];

  return (
    <>
      <div className="md:container md:mx-auto">
        <h1 className="m-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          My Goals
        </h1>
        <ul className="p-2 flex flex-wrap grid lg:grid-cols-2 grid-cols-1 gap-4 content-start">
          {dummyGoal.map((goal) => (
            <li key={goal.goalName}>
              <GoalCard
                name={goal.goalName}
                description={goal.goalDescription}
                milestones={goal.milestones}
                totalMilestones={goal.totalMilestones}
                activities={goal.activities}
                totalActivities={goal.totalActivities}
                goalDate={goal.goalDate}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyGoals;
