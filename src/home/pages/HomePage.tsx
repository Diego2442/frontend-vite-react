import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";
import { HomeCards } from "../components/HomeCards";

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-2xl mx-auto text-center space-y-8 p-8 animate-fade-in">
        <div className="space-y-4">
         
          <h1 className="text-5xl font-pokemon font-bold tracking-tight 
                text-amber-400 md:text-5xl [-webkit-text-stroke:0.1px_#3b82f6]">
            Sistema de Api Pokemón
          </h1>


          <p className="text-xl text-muted-foreground">
            Aqui puedes registrarte o iniciar sesión o registrarte y utiliza nuestra api
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link to="/login">
            <Button size="lg" className="gap-2 shadow-elegant hover:shadow-xl transition-all bg-blue-500 hover:bg-blue-400">
              <LogIn className="w-5 h-5" />
              Iniciar Sesión
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="outline" className="gap-2 hover-scale hover:bg-cyan-500 hover:text-white">
              <UserPlus className="w-5 h-5" />
              Crear Cuenta
            </Button>
          </Link>
        </div>

        <HomeCards/>
      </div>
    </div>
  );
};

export default HomePage;
