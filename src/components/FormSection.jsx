export default function FormSection(){
    return (
        <section className="w-full bg-[black] flex justify-center items-center py-[5rem]">
            <div className="mr-[10rem] pb-[4rem]">
                <h1 className="text-[white] text-[2rem] font-bold">Want tips & tricks to optimize your flow?</h1>
                <p className="text-[white] text-[0.9rem]">Sign up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <form className="flex mb-5">
                    <input className="bg-white w-[250px] h-[40px] rounded-[5px] mr-3 text-[0.9rem] px-[1rem] outline-0" type="text" placeholder="Enter your email" />
                    <button className="bg-[#0c7958] w-[120px] text-[0.9rem] h-[40px] rounded-[5px] font-medium pb-0.5">Notify me</button>
                </form>
                <p className="text-white text-[0.9rem] font-medium w-[350px]">We care about the protection of your data.Read our <a className="text-[#0c7958] font-medium underline" href="#">Privacy Policy</a></p>
            </div>
        </section>
    )
}