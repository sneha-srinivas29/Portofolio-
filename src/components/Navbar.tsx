// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const links = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Projects", href: "#projects" },
//   { label: "Experience", href: "#experience" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "glass-strong shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
//         <a
//           href="#"
//           className="font-semibold text-lg tracking-tight text-foreground"
//           style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//         >
//           sneha<span className="text-primary">.</span>dev
//         </a>

//         <div className="hidden md:flex items-center gap-8">
//           {links.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
//             >
//               {l.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="text-sm px-5 py-2 rounded-full gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
//           >
//             Let's Talk
//           </a>
//         </div>

//         <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden overflow-hidden glass-strong"
//           >
//             <div className="px-6 py-6 flex flex-col gap-4">
//               {links.map((l) => (
//                 <a
//                   key={l.href}
//                   href={l.href}
//                   onClick={() => setOpen(false)}
//                   className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//                 >
//                   {l.label}
//                 </a>
//               ))}
//               <a
//                 href="#contact"
//                 onClick={() => setOpen(false)}
//                 className="text-sm px-5 py-2.5 rounded-full gradient-primary text-primary-foreground text-center font-medium"
//               >
//                 Let's Talk
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.1, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-semibold text-lg tracking-tight text-foreground relative"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          sneha
          <motion.span
            className="text-primary"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
          dev
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <div key={l.href} className="relative">
              <a
                href={l.href}
                className={`relative text-sm px-4 py-2 rounded-full transition-colors duration-200 font-medium ${
                  active === l.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/8 border border-primary/15"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            </div>
          ))}

          <motion.a
            href="#contact"
            className="ml-3 text-sm px-5 py-2 rounded-full gradient-primary text-primary-foreground font-medium relative overflow-hidden"
            whileHover={{ scale: 1.04, opacity: 0.92 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center text-foreground"
          whileTap={{ scale: 0.93 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-t border-border/40"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                hidden: {},
              }}
              className="px-6 py-5 flex flex-col gap-1"
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.2 } },
                  }}
                  className={`text-sm px-4 py-2.5 rounded-xl transition-colors font-medium ${
                    active === l.href
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.2 } },
                }}
                className="mt-2 text-sm px-5 py-2.5 rounded-full gradient-primary text-primary-foreground text-center font-medium"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
