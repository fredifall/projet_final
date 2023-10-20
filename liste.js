function verify_passwords(password1, password2)
{
	// do various checks, this will save people noticing mistakes on next page
	if (password1.value == '' || password2.value == '')
	{
		alert('Merci de remplir les deux champs relatifs au mot de passe.');
		return false;
	}
	else if (password1.value != password2.value)
	{
		alert('Les deux mots de passe que vous avez insérés ne correspondent pas.');
		return false;
	}
	else
	{
		

		var junk_output;

		md5hash(password1, document.forms.register.password_md5, junk_output, 0);
		md5hash(password2, document.forms.register.passwordconfirm_md5, junk_output, 0);

		

		return true;
	}
	return false;
}

function clear_birthday()
	{
		fetch_object('bd_month').selectedIndex = 0;
		fetch_object('bd_day').selectedIndex = 0;
		fetch_object('bd_year').value = '';
	}
	//-->