import FormSideNav from "../components/SideNav.jsx";

const FormLayout = (props) => {
    return(
        <div className={"main-form"}>
            <FormSideNav/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default FormLayout