import icon from "../../assets/img/icon.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-10">
        <aside>
          <div className="flex items-center justify-center gap-4 ">
            <img className="w-10 pb-2" src={icon} alt="" />
            <p className="text-2xl font-semibold">BookHub </p>
          </div>
          <p> Providing reliable books since 2013</p>
        </aside>
        <nav>
          <h6 className="footer-title">Library Services</h6>
          <h1 className="">Catalog Search</h1>
          <h1 className="">Online Resources</h1>
          <h1 className="">Membership</h1>
          <h1 className="">Events</h1>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <h1 className="">Our Story</h1>
          <h1 className="">Contact</h1>
          <h1 className="">Careers</h1>
          <h1 className="">Press</h1>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <h1 className="">Terms of Use</h1>
          <h1 className="">Privacy Policy</h1>
          <h1 className="">Cookie Policy</h1>
        </nav>
      </footer>
      <div className="text-center border-t-2 border-gray-300 bg-base-300 py-2">
        <h1 className="text-lg">
          © Copyright 2025 BookHub. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
