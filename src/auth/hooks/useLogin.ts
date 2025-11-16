import { toast } from "sonner";
import { loginSchema, type LoginForm } from "../interfaces/auth.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAction } from "../actions/login.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useLogin = () => {
    const queryClient = useQueryClient()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const mutation = useMutation({
        mutationFn: async (data: LoginForm) => {
            return await loginAction(data.email, data.password);
        },
        onSuccess: (data) => {
            toast.success("Usuario logueado con éxito");
            localStorage.setItem('token', JSON.stringify(data))
            queryClient.invalidateQueries({ queryKey: ['auth'] })
        },
        onError: (error) => {
            console.log(error.message)
            toast.error("Credenciales incorrectas intenta de nuevo");
        },
    });

    const onSubmit = (data: LoginForm) => {
        //console.log("Register:", data);
        mutation.mutateAsync(data)
    };

    return {
        register,
        handleSubmit,
        formState: { errors },
        onSubmit,

        isPending: mutation.isPending
    }
}