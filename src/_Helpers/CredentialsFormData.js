export const inputProps = {
    firstName:{
        label: "First Name",
        name:"firstName",
        type:"text",
        required: false
    },
    lastName:{
        label: "Last Name",
        name:"lastName",
        type:"text",
        required: false
    },
    email:{
        label: "*Email",
        name:"email",
        type:"text",
        required: true
    },
    password:{
        label: "*Password",
        name:"password",
        type:"password",
        required: true
    }
    
}

export const stateData = {
    blurred: {
        email: {
            error: false,
            message: "required"
        },
        password: {
            error: false,
            message: "required"
        },
    },
    input: {
        firstName:"",
        lastName: "",
        email: "",
        password: ""
    }
}