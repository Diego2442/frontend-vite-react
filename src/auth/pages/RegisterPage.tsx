import { Lock, Mail, User } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "../hooks/useRegister";



const RegisterPage = () => {

  const {onSubmit, formState: {errors}, handleSubmit, register, isPending} = useRegister()

  return (
    <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Formulario Izquierdo */}
      <div className="flex-1 flex items-center justify-center p-8 animate-in slide-in-from-left-8 duration-500 ease-out">
        <Card className="w-full max-w-md p-8 shadow-elegant animate-in zoom-in duration-500 ease-out">
          <div className="space-y-6">
            <div className="space-y-2 text-center animate-in fade-in duration-500 ease-out">
              <h2 className="text-3xl font-bold tracking-tight">Crear Cuenta</h2>
              <p className="text-muted-foreground">
                Completa el formulario para comenzar
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Nombre */}
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="pl-10"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
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
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Contraseña */}
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
                  <p className="text-sm text-destructive">{errors.password.message}</p>
                )}
              </div>

              {/* Confirmar Contraseña */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    {...register("confirmPassword")}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-400" disabled={isPending}>
                Crear Cuenta
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">¿Ya tienes una cuenta? </span>
              <Link to="/login" className="text-primary hover:underline font-medium">
                Inicia sesión aquí
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Panel Derecho */}
      <div className="hidden lg:flex lg:w-1/2 relative animate-in slide-in-from-right-20 duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 opacity-90" />
        <div className="relative w-full h-full flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-md space-y-6 animate-in fade-in duration-500 ease-out">
            <h1 className="text-5xl font-bold leading-tight">Comienza tu viaje</h1>
            <p className="text-lg text-white/90">
              Únete a nuestra comunidad y descubre todas las posibilidades
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
