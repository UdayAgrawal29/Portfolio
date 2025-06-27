
const GlowingCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("glowing-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return null; 
};

export default GlowingCursor;