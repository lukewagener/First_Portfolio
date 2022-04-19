function validate(e)
{
    hideErrors();

    if (formHasErrors())
    {
        e.preventDefault();

        return false;
    }

    return true;
}

function resetForm(e)
{
    if (confirm('Clear form?'))
    {
        hideErrors();

        document.getElementById("fullname").focus();

        return true;
    }

    e.preventDefault

    return false;
}

function formFieldHasInput(fieldElement)
{
    if (fieldElement.value == null || fieldElement.value.trim() == "")
    {
        return false;
    }

    return true;
}

function formHasErrors()
{
    let errorFlag = false;
    let requiredFields = ["fullname", "tel", "email", "comments"];

    for (let i = 0; i <requiredFields.length; i++)
    {
        let textField = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(textField))
        {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";

            if (!errorFlag)
            {
                textField.focus();
                textField.select();
            }

            errorFlag = true;
        }
    }

    let telRegex = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
    let telField = document.getElementById("tel").value;

    if(!telRegex.test(telField))
    {
        document.getElementById("telformat_error").style.display = "block";

        if(!errorFlag)
        {
            document.getElementById("tel").focus();
            document.getElementById("tel").select();
        }

        errorFlag = true;
    }

	let emailRegex = new RegExp(/\S+@\S+\.\S+/);
	let emailField = document.getElementById("email").value;

	if(!emailRegex.test(emailField))
	{
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	return errorFlag;
}

function hideErrors()
{
	let error = document.getElementsByClassName("error");

	for ( let i = 0; i < error.length; i++ )
    {
		error[i].style.display = "none";
	}
}

function load()
{
	document.getElementById("submit").addEventListener("click", validate);
	document.getElementById("reset").addEventListener("click", resetForm);
}

document.addEventListener("DOMContentLoaded", load);
document.addEventListener("DOMContentLoaded", hideErrors);