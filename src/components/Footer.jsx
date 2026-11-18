import { SITE_NAME } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {SITE_NAME}. Free AI automation for new businesses.
      </div>
    </footer>
  );
}
