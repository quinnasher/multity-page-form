import FormStepper from "./form-stepper.jsx";
import {Link} from "react-router-dom";

const FormSideNav = () => {
    return(
        <aside className="form-sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <FormStepper/>
                        </Link>
                    </li>
                    <li>
                        <FormStepper/>
                    </li>
                    <li>
                        <FormStepper/>
                    </li>
                    <li>
                        <FormStepper/>
                    </li>

                </ul>
            </nav>
        </aside>

    )
}

export default FormSideNav