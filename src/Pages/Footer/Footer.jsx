import icon from '../../assets/img/icon.png'

const Footer = () => {
    return (
      <footer className="footer bg-base-300  text-base-content p-10">
        <aside>
          <div className='flex items-center justify-center gap-4 '>
            <img className="w-10 pb-2" src={icon} alt="" />
            <p className="text-2xl font-semibold">BookHub Ltd</p>
          </div>
          <p> Providing reliable books since 2013</p>
        </aside>
        <nav>
          <h6 className="footer-title">Library Services</h6>
          <a className="link link-hover">Catalog Search</a>
          <a className="link link-hover">Online Resources</a>
          <a className="link link-hover">Membership</a>
          <a className="link link-hover">Events</a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    );
};

export default Footer;