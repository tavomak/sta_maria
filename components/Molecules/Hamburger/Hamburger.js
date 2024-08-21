const Hamburger = ({ open = false, setOpen }) => {
  return (
    <button
      type="button"
      className="h-10 w-10 rounded-full border-2 border-white z-20"
      aria-label="Menu"
      onClick={() => setOpen(!open)}
    >
      <div className="grid justify-items-center gap-1">
        <span
          className={`h-[2px] w-4 rounded-full bg-white transition ${open && "rotate-45 translate-y-2"} `}
        />
        <span
          className={`h-[2px] w-4 rounded-full bg-white transition ${open && "scale-x-0"}`}
        />
        <span
          className={`h-[2px] w-4 rounded-full bg-white ${open && "-rotate-45 -translate-y-2"}`}
        />
      </div>
    </button>
  );
};

export default Hamburger;
