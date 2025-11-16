import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"; // 👈 todos desde aquí

import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";

export const PokemonHeader = () => {
  const queryClient = useQueryClient();

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    localStorage.removeItem("token");
    queryClient.invalidateQueries({ queryKey: ["auth"] }); // mejor que refetchQueries
  };

  return (
    <header className="bg-gradient-to-r from-red-600 via-amber-600 to-blue-600 text-primary-foreground py-8 px-4 shadow-lg">
      <div className="container mx-auto relative">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="secondary"
              size="sm"
              className="fixed top-2 right-2 z-50 
    bg-amber-400 hover:bg-amber-300
    lg:absolute lg:top-0 lg:right-0"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Cerrar sesión?</AlertDialogTitle>
              <AlertDialogDescription>
                ¿Estás seguro que deseas cerrar sesión? Tendrás que volver a
                iniciar sesión para acceder a tu cuenta.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleLogout}
                className="bg-blue-500 hover:bg-blue-400"
              >
                Cerrar sesión
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <h1 className="text-5xl font-bold mb-2 text-center drop-shadow-lg">
          Pokédex Digital
        </h1>
        <p className="text-center text-lg opacity-90">
          Descubre y explora el mundo Pokémon
        </p>
      </div>
    </header>
  );
};
