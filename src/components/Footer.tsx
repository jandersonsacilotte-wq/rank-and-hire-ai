const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="text-sm font-bold text-foreground">
          Filtr<span className="text-gradient">AI</span>
        </span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FiltrAI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
