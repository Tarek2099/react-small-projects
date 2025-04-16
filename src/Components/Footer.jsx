import moment from "moment";

const Footer = () => {
  const date = new Date();
  const persedTime = moment(date).format("h:mm:ss");
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 My Practice App. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
        </p>
        <p>{persedTime}</p>
      </div>
    </footer>
  );
};

export default Footer;
