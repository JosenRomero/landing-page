
const CustomContainer = (props) => {

    const ContainerTag = `${props.as ? props.as : "section"}`;

    return (
        <ContainerTag 
            className={props.className ? props.className : ""} 
            id={props.id ? props.id : ""}
        >
            {props.children}
        </ContainerTag>
    );

}

export default CustomContainer