import React from "react";
import { Radar } from "react-chartjs-2";
import Data from "./database.json"

export default function RadarChart({ input, answer }) {
  const data = Data;
  const RadarData = {
    labels: ["Endurance", "Strength", "Power", "Speed", "Agility", "Flexability", "Nerve", "Durability", "Hand_eye_coordination", "Analytical_Aptitude"],
    datasets: [
      {
        label: "input",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [input.Endurance, input.Strength, input.Power, input.Speed, input.Agility, input.Flexibility, input.Nerve, input.Durability, input.Hand_eye_coordination, input.Analytical_Aptitude]
      },
      {
        label: answer.SkillName,
        backgroundColor: "rgba(200, 102, 136, .2)",
        borderColor: "rgba(200, 102, 136, 1)",
        pointBackgroundColor: "rgba(200, 102, 136, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(200, 102, 136, 1)",
        data: [answer.Endurance, answer.Strength, answer.Power, answer.Speed, answer.Agility, answer.Flexibility, answer.Nerve, answer.Durability, answer.Hand_eye_coordination, answer.Analytical_Aptitude]
      }
    ]
  };
  const RadarOptions = {
    scale: {
      ticks: {
        min: 0,
        max: 10,
        stepSize: 2,
        showLabelBackdrop: false,
        backdropColor: "rgba(203, 197, 11, 1)"
      },
      angleLines: {
        color: "rgba(255, 255, 255, .3)",
        lineWidth: 1
      },
      gridLines: {
        color: "rgba(255, 255, 255, .3)",
        circular: true
      }
    }
  };
  return (
    <Radar data={RadarData} options={RadarOptions} />
  );
}
