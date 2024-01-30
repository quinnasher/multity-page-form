import FormLayout from "../templates/FormLayout.jsx";
import {Link} from "react-router-dom";

function PersonalFormPage() {
    return(<div className={'form-container'}>
        <FormLayout>
            <h1>Personal Info</h1>
            <Link to='/select-plan'>Next</Link>
        </FormLayout>
    </div>)
}

export default PersonalFormPage