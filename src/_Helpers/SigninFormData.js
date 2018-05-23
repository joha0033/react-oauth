{
    export const registerInputProps = {
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
    
    export const registerStateData = {
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
            email: "",
            password: ""
        }
    }