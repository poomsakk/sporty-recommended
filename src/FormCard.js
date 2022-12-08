import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Card.css";
import Data from "./database.json"
import RadarChart from "./RadarChart";

export default function FormCard({ addPost }) {
    const data = Data;
    const [changed,setChanged] = useState("")
    const [allValues, setallValues] = useState({
        Endurance: '',
        Strength: '',
        Power: '',
        Speed: '',
        Agility: '',
        Flexibility: '',
        Nerve: '',
        Durability: '',
        Hand_eye_coordination: '',
        Analytical_Aptitude: ''
    });

    const [newResulst, setnewResulst] = useState({
        Endurance: 0,
        Strength: 0,
        Power: 0,
        Speed: 0,
        Agility: 0,
        Flexibility: 0,
        Nerve: 0,
        Durability: 0,
        Hand_eye_coordination: 0,
        Analytical_Aptitude: 0
    })

    const [answer, setAnswer] = useState({
        Endurance: 0,
        Strength: 0,
        Power: 0,
        Speed: 0,
        Agility: 0,
        Flexibility: 0,
        Nerve: 0,
        Durability: 0,
        Hand_eye_coordination: 0,
        Analytical_Aptitude: 0,
        SkillName: "Recommended Sport"
    })

    const onValueChange = (e) => {
        setallValues({ ...allValues, [e.target.name]: e.target.value })
        setnewResulst({ ...allValues, [e.target.name]: Number(e.target.value) })
        setChanged("Please click send to calculate new input");
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var cosineResults = [];
        var absA = [];
        var absB = Math.sqrt(newResulst.Agility * newResulst.Agility + newResulst.Analytical_Aptitude * newResulst.Analytical_Aptitude + newResulst.Durability * newResulst.Durability + newResulst.Endurance * newResulst.Endurance + newResulst.Flexibility * newResulst.Flexibility + newResulst.Hand_eye_coordination * newResulst.Hand_eye_coordination + newResulst.Nerve * newResulst.Nerve + newResulst.Power * newResulst.Power + newResulst.Speed * newResulst.Speed + newResulst.Strength * newResulst.Strength);
        var AdotB = [];
        var newAns = 0;
        var id = 0;
        for (var i = 0; i < Data.length; i++) {
            absA.push(Math.sqrt(data[i].Agility * data[i].Agility + data[i].Analytical_Aptitude * data[i].Analytical_Aptitude + data[i].Durability * data[i].Durability + data[i].Endurance * data[i].Endurance + data[i].Flexibility * data[i].Flexibility + data[i].Hand_eye_coordination * data[i].Hand_eye_coordination + data[i].Nerve * data[i].Nerve + data[i].Power * data[i].Power + data[i].Speed * data[i].Speed + data[i].Strength * data[i].Strength));
            AdotB.push(data[i].Agility * newResulst.Agility + data[i].Analytical_Aptitude * newResulst.Analytical_Aptitude + data[i].Durability * newResulst.Durability + data[i].Endurance * newResulst.Endurance + data[i].Flexibility * newResulst.Flexibility + data[i].Hand_eye_coordination * newResulst.Hand_eye_coordination + data[i].Nerve * newResulst.Nerve + data[i].Power * newResulst.Power + data[i].Speed * newResulst.Speed + data[i].Strength * newResulst.Strength);
            cosineResults.push(AdotB[i] / (absA[i] * absB));
            if (AdotB[i] / (absA[i] * absB) > newAns) {
                newAns = AdotB[i] / (absA[i] * absB);
                id = i;
            }
        }
        addPost(cosineResults);
        setChanged("");
        setAnswer(data[id]);
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className='testbox'>
                    <form onSubmit={handleSubmit}>
                        <h1>แบบฟอร์มการประเมิณความสามารถ</h1>
                        <p class="">เลือก 1-ถนัดน้อยสุด, 10-ถนัดมากสุด</p>
                        <table>
                            <tr>
                                <th class="first-col"><h4>CHECK LIST</h4></th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                            </tr>
                            <tr>
                                <td class="first-col">Endurance - ความอดทน</td>
                                <td><input type="radio" value="1" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Endurance" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Endurance" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Strength - ความเเข็งแกร่ง</td>
                                <td><input type="radio" value="1" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Strength" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Strength" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Power - กำลัง</td>
                                <td><input type="radio" value="1" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Power" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Power" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Speed - ความเร็ว</td>
                                <td><input type="radio" value="1" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Speed" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Speed" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Agility - ความคล่องตัว</td>
                                <td><input type="radio" value="1" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Agility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Agility" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Flexibility - ความยืดหยุ่น</td>
                                <td><input type="radio" value="1" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Flexibility" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Flexibility" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Nerve - ความกล้าหาญ/ความมั่นคงทางจิตใจ</td>
                                <td><input type="radio" value="1" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Nerve" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Nerve" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Durability  - ความทนทาน</td>
                                <td><input type="radio" value="1" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Durability" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Durability" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Hand eye coordination<br /> - การประสานงานของมือและตา</td>
                                <td><input type="radio" value="1" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Hand_eye_coordination" onChange={onValueChange} /></td>
                            </tr>
                            <tr>
                                <td class="first-col">Analytical Aptitude<br /> - ทักษะในการวิเคราะห์
                                </td>
                                <td><input type="radio" value="1" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="2" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="3" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="4" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="5" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="6" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="7" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="8" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="9" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                                <td><input type="radio" value="10" name="Analytical_Aptitude" onChange={onValueChange} /></td>
                            </tr>
                        </table>
                        <div class="btn-block">
                            <button type="submit" >Send</button>
                        </div>
                        {changed}
                    </form>
                </div>
            </div>
            <div className="boxxer">
                <h2>
                    "{answer.SkillName}" are suitable for you
                </h2>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="testbox">
                        <div className="resbox">
                            <pre>
                                <br />Your Stats <br />
                                Endurance               :   {newResulst.Endurance}<br />
                                Strength                :   {newResulst.Strength}<br />
                                Power                   :   {newResulst.Power}<br />
                                Speed                   :   {newResulst.Speed}<br />
                                Agility                 :   {newResulst.Agility}<br />
                                Flexibility             :   {newResulst.Flexibility}<br />
                                Nerve                   :   {newResulst.Nerve}<br />
                                Durability              :   {newResulst.Durability}<br />
                                Hand eye coordination   :   {newResulst.Hand_eye_coordination}<br />
                                Analytical Aptitude     :   {newResulst.Analytical_Aptitude}<br />
                                <br /><RadarChart input={newResulst} answer={answer} />
                            </pre>


                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}