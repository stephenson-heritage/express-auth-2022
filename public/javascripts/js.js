const init = async function() {

    const username = "bob";
    const password = "123abcD%";

    const encodedLoginInfo = btoa(`${username}:${password}`);
    let url = "http://localhost:3000/api";
    let data = await (await fetch(url, {
        headers: { Authorization: `Basic ${encodedLoginInfo}` }
    })).json();

    console.log(data);

}



init();