// import Counter from "./Counter";

import { useState } from 'react';
import steps from '../assets/steps';
import Counter from './Counter';

function Stepper() {

    const [currentStep, setCurrentStep] = useState(0);



    return <div className="w-2/5 h-3/5 bg-white rounded-xl shadow-xl flex flex-col items-center p-16">
        <div className="h-1/5 w-full flex items-center justify-around overflow-auto">
            
            {
                steps.map((step) => {
                    const active = step.id <= currentStep || step.id == 0;
                    return <Counter active={active} count={step.id + 1} callback={() => setCurrentStep(step.id)}></Counter>;
                })
            }

        </div>
        <div dangerouslySetInnerHTML={{ __html: steps[currentStep].content }} className="h-4/5 w-full rounded-xl flex justify-center items-center text-4xl font-bold text-purple-500">
        </div>
    </div>;
}

export default Stepper;

