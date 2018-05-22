export const registerInputProps = {
    firstName:{
        label: "First Name",
        name:"firstName",
        type:"text"
    },
    lastName:{
        label: "Last Name",
        name:"lastName",
        type:"text"
    },
    email:{
        label: "*Email",
        name:"email",
        type:"text"
    },
    password:{
        label: "*Password",
        name:"password",
        type:"password"
    }
}

export const registerStateData = {
    blurred: {
        firstName: false,
        lastName: false,
        email: false,
        password: false
    },
    input: {
        firstName:"",
        lastName: "",
        email: "",
        password: ""
    }
}