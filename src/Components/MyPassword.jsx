const ValidPassword = () => <h1>Yes Valid Password</h1>
const NotValidPassword = () => <h1>NO this is not Valid Password</h1>

const Password = ({ isValid }) => {
    // if (isValid) {
    //     return <ValidPassword />
    // }
    // return <NotValidPassword />

    return isValid ? <ValidPassword /> : <NotValidPassword />
}




const MyPassword = () => <Password isValid={false} />

export default MyPassword;