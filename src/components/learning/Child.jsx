
const Child = (props) => {

    const childData = 'Monu';

    return (
        <>
            <p>Child Component</p>
            <p>Child data in child component: {childData}</p>
            <p>Parent data in child component: {props.parentDataToChild}</p>
        </>
    );

};

export default Child;