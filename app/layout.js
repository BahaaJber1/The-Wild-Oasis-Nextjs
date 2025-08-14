import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild Oasis",
}

export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer>
          Copyright by the Wild Oasis
        </footer>
      </body>
    </html>
  );
}