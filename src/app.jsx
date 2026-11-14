/* global React, ReactDOM, window */

function App() {
  const [active, setActive] = React.useState("about");

  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-30% 0px -55% 0px" });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <window.Topbar active={active} />
      <window.Hero />
      <window.About />
      <window.CareerArc />
      <window.Projects />
      <window.Skills />
      <window.Education />
      <window.Contact />
      <window.Footer />
    </>
  );
}

window.App = App;

// build.js loads this file in Node (no ReactDOM) only to grab App for pre-rendering.
if (window.ReactDOM) {
  const root = document.getElementById("root");
  if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, <App />);
  else ReactDOM.createRoot(root).render(<App />);
}
