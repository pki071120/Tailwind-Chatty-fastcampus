import React from "react";

const Feedback = () => {
	const image = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc";
	return (
		<section
			name="testimonials"
			className="w-full my-24 text-white bg-slate-700"
		>
			<div className="max-w-6xl px-5 mx-auto text-center py-12">
				<h2 className="text-4xl font-bold">Testimonials</h2>
				<p className="py-8 text-2xl text-white">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>

				<div className="flex flex-col mt-24 md:flex-row md:space-x-6">
					<div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
						<img src={image} alt="" className="w-16 rounded-full -mt-14" />
						<h5 className="text-lg font-bold">Hello world</h5>
						<p className="text-sm">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.{" "}
						</p>
					</div>
					<div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3 ">
						<img src={image} alt="" className="w-16 rounded-full -mt-14" />
						<h5 className="text-lg font-bold">Hello world</h5>
						<p className="text-sm">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.{" "}
						</p>
					</div>
					<div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
						<img src={image} alt="" className="w-16 rounded-full -mt-14" />
						<h5 className="text-lg font-bold">Hello world</h5>
						<p className="text-sm">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.{" "}
						</p>
					</div>
				</div>

				<button className="px-6 py-3 my-8 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
					Get Started
				</button>
			</div>
		</section>
	);
};

export default Feedback;
