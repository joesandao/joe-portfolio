const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Joe Kuroha</p>
      <a href="https://github.com/joesandao/joe-portfolio" className="text-blue-400 hover:underline">
        This site is powered by Next.JS 14
      </a>
    </footer>
  );
};

export default Footer;