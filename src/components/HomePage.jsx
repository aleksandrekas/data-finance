import { useEffect, useState } from "react";





export default function HomePage() {
  const buttonStyle = 'h-[40px] rounded-[5px] text-[0.8rem] cursor-pointer';
  const words = ['BTB','BTC','SaaS'];
  const [word,setWord] = useState('');
  const [index,setIndex] = useState(0);
  const [isDeleting,setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index % words.length];

    let typingSpeed = isDeleting ? 100 : 150;

    const type = () => {
      if (isDeleting) {
        setWord((prev) => prev.slice(0, -1));
      } else {
        setWord((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && word === currentWord) {
        // Pause before deleting
        setTimeout(() => setDeleting(true), 1000);
      } else if (isDeleting && word === '') {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [word, isDeleting, index]);




  return (
    <div id="container" className="w-full h-screen bg-black">
      <nav className="flex justify-between w-[60%] mx-auto pt-6">
        <div className="text-[#0c7958] font-bold text-3xl">REACT.</div>
        <div className="flex">
          <ul className="flex flex-row justify-center items-center mr-2">
            <ListItem text={"Home"} />
            <ListItem text={"Account"} />
            <ListItem text={"Sign in"} />
          </ul>
          <button className={`${buttonStyle} w-[100px] bg-white hover:bg-[#0c7958] hover:text-white font-medium`}>
            Get Started
          </button>
        </div>
      </nav>

      <section id="homeSection" className="flex flex-col justify-center items-center mt-40">
        <h5 className="text-[#0c7958] font-bold mb-4">GROWING WITH DATA ANALYTICS</h5>
        <h1 className="text-white text-6xl font-medium mb-4">Grow with data.</h1>
        <h2 className="text-white font-medium text-5xl mb-4">Fast, flexible financing for <span className="text-[#8d918e]">{word}</span><span className="cursor text-[#8d918e]">|</span></h2>
        <p className="mb-4 w-[800px] text-center text-[#8d918e] font-bold text-2xl">Monitor your data analytics to increase revenue for B2B, BTC, & SaaS platforms.</p>
        <button className="bg-[#0c7958] w-[200px] text-black hover:bg-[white] hover:text-[#0c7958] px-4 py-2 rounded-[5px] cursor-pointer font-medium">Get Started</button>
      </section>
    </div>
  );
}


function ListItem({text}){
    return (
        <li className="text-white mx-1.5 hover:text-[#0c7958] cursor-pointer">{text}</li>
    )
}