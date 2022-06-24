
const CustomContainer = (props) => {

    const ContainerTag = `${props.as ? props.as : "section"}`;

    return (
        <ContainerTag className="container" id={props.id ? props.id : ""}>
            {props.children}
        </ContainerTag>
    );

}

export default CustomContainer