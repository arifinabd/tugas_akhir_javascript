function buat_login() {
    var elem = document.getElementById('x')
    elem.parentElement.removeChild(elem)

    var element = document.getElementsByTagName('div')[0]

    var p = document.createElement('p');
    p.innerHTML = "silahkan mendaftar"
    p.className = "tulisan_login"
    element.appendChild(p)

    var form = document.createElement('form');
    element.appendChild(form);

    var label = document.createElement('label');
    label.innerHTML = "Nama User"
    form.appendChild(label);

    var input_user = document.createElement('input');
    input_user.type = "text"
    input_user.placeholder = "Nama User..."
    input_user.name = 'user'
    input_user.className = "form_login"
    form.appendChild(input_user);

    var label2 = document.createElement('label')
    label2.innerHTML = "Nomor Hanphone"
    form.appendChild(label2);

    var input_noHP = document.createElement('input')
    input_noHP.type = 'text'
    input_noHP.placeholder = "Nomor Hanphone..."
    input_noHP.name = "nomorHP"
    input_noHP.className = "form_login"
    form.appendChild(input_noHP)

    var label3 = document.createElement('label')
    label3.innerHTML = "Username"
    form.appendChild(label3);

    var input_username = document.createElement('input')
    input_username.type = 'text'
    input_username.placeholder = "Username atau Email..."
    input_username.name = "username"
    input_username.className = "form_login"
    form.appendChild(input_username)

    var label4 = document.createElement('label')
    label4.innerHTML = "Password"
    form.appendChild(label4);

    var input_password = document.createElement('input')
    input_password.type = 'password'
    input_password.placeholder = "Password..."
    input_password.name = "password"
    input_password.className = "form_login"
    form.appendChild(input_password)

    var tombol = document.createElement("button")
    tombol.textContent = 'Daftar Sekarang'
    tombol.className = 'tombol_login'
    form.appendChild(tombol)
}