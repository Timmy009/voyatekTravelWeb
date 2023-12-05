

import React from 'react';
import { FiUsers, FiSave } from 'react-icons/fi';
import './style/vacationPlanner.css'
import frame2 from "../assets/Frame (1).png"
import frame3 from "../assets/Frame (2).png"

const VacationPlanHeader = () => {
  return (
    <div className="vacation-plan-header">
     <img src={frame2} />
     <img src={frame3} className='img' />
    </div>
  );
};

export default VacationPlanHeader;
