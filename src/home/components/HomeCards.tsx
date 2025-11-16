export const HomeCards = () => {
  return (
    <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
      <div className="p-4 rounded-lg bg-card border border-border hover-scale">
        <h3 className="font-semibold mb-2">Animaciones Fluidas</h3>
        <p className="text-sm text-muted-foreground">
          Transiciones suaves entre formularios
        </p>
      </div>
      <div className="p-4 rounded-lg bg-card border border-border hover-scale">
        <h3 className="font-semibold mb-2">Validación Completa</h3>
        <p className="text-sm text-muted-foreground">
          Feedback en tiempo real con Zod
        </p>
      </div>
      <div className="p-4 rounded-lg bg-card border border-border hover-scale">
        <h3 className="font-semibold mb-2">Diseño Moderno</h3>
        <p className="text-sm text-muted-foreground">
          Interfaz limpia y responsive
        </p>
      </div>
    </div>
  );
};
