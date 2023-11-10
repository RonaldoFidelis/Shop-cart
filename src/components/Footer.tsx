export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-black text-white gap-2 p-2">
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-[13.5px] font-light">
          Desenvolvido por: <a className="hover:text-slate-300 duration-500 cursor-pointer"
            href="https://portfolio-ronaldo-fidelis-dev.vercel.app/"
            target="_blank"
            rel="noreferrer">Ronaldo Fidelis
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-[13.5px] font-light">Todas as imagens são reservadas a <a className="hover:text-slate-300 duration-500 cursor-pointer"
          href="https://www.nike.com.br/"
          target="_blank">&copy;Nike</a></p>
      </div>
    </footer>
  );
}
