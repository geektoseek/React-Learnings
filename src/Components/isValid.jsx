const ValidPassord = () => <h1>Yes this is Valid Password</h1>;
const IsnotvalidPassord = () => <h1>NO this is not Valid Password</h1>;
const Password = () => {
    const Isvalid = true;

    if (Isvalid) {
        return <ValidPassord />;
    } else {
        return <IsnotvalidPassord />;
    }

}

export default Password;