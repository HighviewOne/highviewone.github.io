/* global React, ReactDOM, window */

function App() {
  const [active, setActive] = React.useState("about");
  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: "-30% 0px -55% 0px"
    });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Topbar, {
    active: active
  }), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.About, null), /*#__PURE__*/React.createElement(window.CareerArc, null), /*#__PURE__*/React.createElement(window.Projects, null), /*#__PURE__*/React.createElement(window.Skills, null), /*#__PURE__*/React.createElement(window.Education, null), /*#__PURE__*/React.createElement(window.Contact, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));