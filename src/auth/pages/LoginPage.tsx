import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,

    isPending,
  } = useLogin();

  return (
    <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Panel Visual Izquierdo - Se desliza desde la izquierda */}
      <div className="hidden lg:flex lg:w-1/2 relative animate-in slide-in-from-left-20 duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 opacity-90" />
        <div className="relative w-full h-full flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-md space-y-6 animate-in fade-in duration-500 ease-out">
            <h1 className="text-5xl font-bold leading-tight">
              Bienvenido de nuevo
            </h1>
            <p className="text-lg text-white/90">
              Inicia sesión para acceder a tu cuenta y continuar tu experiencia
            </p>
            <div className="pt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white" />
                  </div>
                  <p className="text-white/80">Acceso rápido y seguro</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white" />
                  </div>
                  <p className="text-white/80">Experiencia personalizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario Derecho - Se desliza desde la derecha */}
      <div className="flex-1 flex items-center justify-center p-8 animate-in slide-in-from-right-8 duration-500 ease-out">
        <Card className="w-full max-w-md p-8 shadow-elegant animate-in zoom-in duration-500 ease-out">
          <div className="space-y-6">
            <div className="space-y-2 text-center animate-in fade-in duration-500 ease-out">
              <h2 className="text-3xl font-bold tracking-tight">
                Iniciar Sesión
              </h2>
              <p className="text-muted-foreground">
                Ingresa tus credenciales para continuar
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400"
                disabled={isPending}
              >
                Iniciar Sesión
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                ¿No tienes una cuenta?{" "}
              </span>
              <Link
                to="/register"
                className="text-primary hover:underline font-medium"
              >
                Regístrate aquí
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
