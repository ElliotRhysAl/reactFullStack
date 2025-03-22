import CardComp from "./Card";

const Footer = () => {
    const data = {
        title : "LinkedIn",
        text : "Find me on LinkedIn",
        url : "https://www.linkedin.com/in/elliotrhysallen/",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
    }
  return (
    <footer className="p-6 bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
          <CardComp title={data.title} text={data.text} url={data.url} img={data.img}/>
      </div>
    </footer>
  );
};

export default Footer;
