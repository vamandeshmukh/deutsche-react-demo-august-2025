import { useSearchParams } from "react-router-dom";
import Child from "./Child";
import { useState } from "react";

const Parent = () => {

    const parentData = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');

    return (
        <>
            <p>Parent Component</p>
            <p>Parent data in parent component: {parentData} </p>
            <p>Child data in parent component: {childDataInParent}</p>
            <Child parentDataToChild={parentData} />
        </>
    );

};

export default Parent;