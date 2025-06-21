export default function Partners(){
    return (
        <section className="flex justify-center items-center bg-white py-[9rem]">
            <Item type={"white"}>
                <img className="w-[90px] absolute top-[-50px]" src="src\assets\single.png" alt="single-image" />
                <h1 className="font-bold text-2xl">Single User</h1>
                <h1 className="font-bold text-4xl">$149</h1>
                <Ul>
                    <ListItem>500 GB Storage</ListItem>
                    <ListItem>1 User Allowed</ListItem>
                    <ListItem>Send uo to 2 GB</ListItem>
                </Ul>
                <Button type={'#0c7958'} />
            </Item>
            <Item type={"#f5f5f5"}>
                <img className="w-[90px] absolute top-[-50px]" src="src\assets\double.png" alt="single-image" />
                <h1 className="font-bold text-2xl">Partnership</h1>
                <h1 className="font-bold text-4xl">$199</h1>
                <Ul>
                    <ListItem>1 TB Storage</ListItem>
                    <ListItem>3 User Allowed</ListItem>
                    <ListItem>Send uo to 10 GB</ListItem>
                </Ul>
                <Button type={'black'} />
            </Item>
            <Item type={"white"}>
                <img className="w-[90px] absolute top-[-50px]" src="src\assets\triple.png" alt="single-image" />
                <h1 className="font-bold text-2xl">Group Account</h1>
                <h1 className="font-bold text-4xl">$299</h1>
                <Ul>
                    <ListItem>5 TB Storage</ListItem>
                    <ListItem>10 User Allowed</ListItem>
                    <ListItem>Send uo to 20 GB</ListItem>
                </Ul>
                <Button type={'#0c7958'} />
            </Item>
        </section>
    )
}


function ListItem({children}){
    return (
        <li className="text-center font-medium w-full border-b-2 border-[#f0eeee] py-0.5">{children}</li>
    )
}


function Ul({children}){
    return(
        <ul className="w-full border-t-2 border-[#f0eeee]">
            {children}
        </ul>
    )
}


function Button({type}){
    return(
        <button style={{background:type , color: type != 'black'? 'black' : '#0c7958'}} className="w-[150px] text-[0.9rem] h-[40px] rounded-[5px] font-medium pb-0.5 cursor-pointer">Start Trial</button>
    )
}



function Item({type,children}){
    return(
        <div style={{background : type , marginTop: type != "white" ? "2.5rem": "0"}} className="flex flex-col justify-evenly items-center w-[350px] h-[400px] rounded-[5px] shadow-2xl mx-4 px-13 relative hover:scale-105 transition-all duration-100">
            {children}
        </div>
    )
}