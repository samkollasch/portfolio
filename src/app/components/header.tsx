import { HeaderMain } from "./header-main";

export const Header = () => {
  return (
    <>
      <a
        href="#main"
        className="absolute top-auto -left-2500 h-px w-px overflow-hidden focus:static focus:h-auto focus:w-auto" // editorconfig-checker-disable
      >
        Skip to main content
      </a>
      <header className="site-header sticky top-0 z-10 flex flex-col bg-white">
        <HeaderMain />
      </header>
    </>
  );
};
