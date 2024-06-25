import { testimonials } from "../constants"

export default function Testimonials() {
  return (
    <div className="mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"> What People are Saying </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin bg-neutral-800">
                        <p className="text-justify">{item.text}</p>
                        <div className="flex mt-8 items-center">
                            <img src={item.image} alt={index.user} className="w-12 h-12 mr-6 rounded-full border border-neutral-300"/>
                            <div>
                                <h6> {item.user} </h6>
                                <span className="text-sm font-normal italc text-neutral-600"> {item.company} </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
