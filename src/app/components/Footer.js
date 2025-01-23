const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blogs 360. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
