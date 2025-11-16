import { useForm } from "react-hook-form";
import { registerSchema, type RegisterForm } from "../interfaces/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../api/userApi";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useRegister = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    });

    const mutation = useMutation({
        mutationFn: async (data: RegisterForm) => {
            const { confirmPassword, ...data_send } = data
            return await userApi.post("/create-account", data_send);
        },
        onSuccess: () => {
            toast.success("Usuario registrado con éxito");
            navigate('/login', { replace: true })
            reset()
        },
        onError: (error) => {
            console.log(error.message)
            toast.error("Error al registrar");
        },
    });

    const onSubmit = (data: RegisterForm) => {
        //console.log("Register:", data);
        mutation.mutateAsync(data)
    };

    return {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        onSubmit,

        isPending: mutation.isPending
    }

}